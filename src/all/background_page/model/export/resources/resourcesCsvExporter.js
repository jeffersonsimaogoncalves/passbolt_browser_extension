/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 */
const {FileFormatError} = require("../../../error/fileFormatError");
const {CsvKdbxRowComposer} = require("./csvRowComposer/csvKdbxRowComposer");
const {Csv1PasswordRowComposer} = require("./csvRowComposer/csv1passwordRowComposer");
const {CsvLastPassRowComposer} = require("./csvRowComposer/csvLastPassRowComposer");

/**
 * Register of csv row parsers
 * @type {array<Class>}
 */
const register = [
  CsvKdbxRowComposer,
  CsvLastPassRowComposer,
  Csv1PasswordRowComposer
];

class ResourcesCsvExporter {
  /**
   * Kdbx exporter constructor
   * @param exportEntity
   */
  constructor(exportEntity) {
    this.exportEntity = exportEntity;
  }

  /**
   * Get the register of row parsers.
   * @returns {Array<Class>}
   */
  static get register() {
    return register;
  }

  /**
   * Export
   * @returns {Promise<void>}
   */
  async export() {
    const RowComposer = this.getRowComposer();
    if (!RowComposer) {
      throw new FileFormatError('This csv format is not supported.');
    }
    const data = this.exportResources(RowComposer);
    // Insert the header manually, Papaparse doesn't insert it if there is not content to write.
    const headerColumns = Object.values(RowComposer.mapping);
    let file = `"${headerColumns.join('","')}"\r\n`;
    // Unparse the content and add it to the result.
    file = file + PapaParse.unparse(data, {header: false, quotes: true, columns: headerColumns});
    this.exportEntity.file = file;
  }

  /**
   * Get the csv row composer.
   * @returns {Class|null} Return the row composer call or null if no match
   */
  getRowComposer() {
    return register.find(rowComposer => rowComposer.format === this.exportEntity.format) || null;
  }

  /**
   * Export the resources
   * @param {Class} RowComposer The row composer
   * @return {array}
   */
  exportResources(RowComposer) {
    const result = [];
    for (const exportResourceEntity of this.exportEntity.exportResources) {
      const row = RowComposer.compose(exportResourceEntity);
      result.push(row);
    }
    return result;
  }
}

exports.ResourcesCsvExporter = ResourcesCsvExporter;
