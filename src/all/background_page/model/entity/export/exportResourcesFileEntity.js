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
const {Entity} = require('../abstract/entity');
const {EntitySchema} = require('../abstract/entitySchema');
const {ExternalFoldersCollection} = require("../folder/external/externalFoldersCollection");
const {ExternalResourcesCollection} = require("../resource/external/externalResourcesCollection");

const ENTITY_NAME = "ExportResourcesFileEntity";
const FORMAT_KDBX = "kdbx";
const FORMAT_CSV_KDBX = "csv-kdbx";
const FORMAT_CSV_LASTPASS = "csv-lastpass";
const FORMAT_CSV_1PASSWORD = "csv-1password";

class ExportResourcesFileEntity extends Entity {
  /**
   * Export resources file entity constructor
   *
   * @param {Object} exportResourcesFileDto export resources file DTO
   * @throws EntityValidationError if the dto cannot be converted into an entity
   */
  constructor(exportResourcesFileDto) {
    super(EntitySchema.validate(
      ExportResourcesFileEntity.ENTITY_NAME,
      exportResourcesFileDto,
      ExportResourcesFileEntity.getSchema()
    ));

    /*
     * // @todo Refactor when a schema deep testing strategy is implemented.
     * $ if (exportResourcesFileDto.options) {
     *   EntitySchema.validate(
     *     ExportResourcesFileEntity.ENTITY_NAME,
     *     exportResourcesFileDto.options,
     *     ExportResourcesFileEntity.getSchema().properties.options
     *   );
     *   if (exportResourcesFileDto.options.credentials) {
     *     EntitySchema.validate(
     *       ExportResourcesFileEntity.ENTITY_NAME,
     *       exportResourcesFileDto.options.credentials,
     *       ExportResourcesFileEntity.getSchema().properties.options.properties.credentials
     *     );
     *   }
     * }
     */

    // Associations
    if (this._props.export_resources) {
      this._export_resources = new ExternalResourcesCollection(this._props.export_resources);
      delete this._props.export_resources;
    }
    if (this._props.export_folders) {
      this._export_folders = new ExternalFoldersCollection(this._props.export_folders);
      delete this._props.export_folders;
    }
  }

  /**
   * Get entity schema
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      "type": "object",
      "required": [
        "format"
      ],
      "properties": {
        "format": {
          "type": "string",
          "enum": ExportResourcesFileEntity.SUPPORTED_FORMAT
        },
        "resources_ids": {
          "anyOf": [{
            "type": "array",
          }, {
            "type": "null"
          }]
        },
        "folders_ids": {
          "anyOf": [{
            "type": "array",
          }, {
            "type": "null"
          }]
        },
        "export_resources": ExternalResourcesCollection.getSchema(),
        "export_folders": ExternalFoldersCollection.getSchema(),
        "options": {
          "type": "object",
          "required": [],
          "properties": {
            "credentials": {
              "type": "object",
              "required": [],
              "properties": {
                "password": {
                  "anyOf": [{
                    "type": "string",
                  }, {
                    "type": "null"
                  }]
                },
                "keyfile": {
                  "anyOf": [{
                    "type": "string",
                    "format": "x-base64"
                  }, {
                    "type": "null"
                  }]
                }
              }
            }
          }
        }
      }
    };
  }

  /*
   * ==================================================
   * Dynamic properties getters
   * ==================================================
   */

  /**
   * Get export format
   * @returns {string}
   */
  get format() {
    return this._props.format;
  }

  /**
   * Get export folders ids
   * @returns {array<uuid>|null}
   */
  get foldersIds() {
    return this._props.folders_ids || null;
  }

  /**
   * Get export resources ids
   * @returns {array<uuid>|null}
   */
  get resourcesIds() {
    return this._props.resources_ids || null;
  }

  /**
   * Get export options
   * @returns {object} the file encrypted in base64
   */
  get options() {
    return this._props.options || {};
  }

  /**
   * get export if any
   * @returns {object}
   */
  get credentials() {
    return this.options.credentials || {};
  }

  /**
   * Get export protecting password
   * @returns {string}
   */
  get password() {
    return this.credentials.password;
  }

  /**
   * Get export protecting keyfile
   * @returns {string}
   */
  get keyfile() {
    return this.credentials.keyfile;
  }

  /*
   * ==================================================
   * Calculated properties
   * ==================================================
   */

  /**
   * Get export file type
   * @returns {string}
   */
  get fileType() {
    return this.format.split('-')[0];
  }

  /*
   * ==================================================
   * Associated properties getters / setters
   * ==================================================
   */

  /**
   * Get the collection of resources to export
   * @returns {ExternalResourcesCollection}
   */
  get exportResources() {
    return this._export_resources;
  }

  /**
   * Set export resources
   * @param {ExternalResourcesCollection} collection The collection of resources to export
   */
  set exportResources(collection) {
    if (!(collection instanceof ExternalResourcesCollection)) {
      throw new TypeError("exportResources must be a valid ImportResourcesCollection instance");
    }
    this._export_resources = collection;
  }

  /**
   * Get the collection of folders to export
   * @returns {ExternalFoldersCollection}
   */
  get exportFolders() {
    return this._export_folders || new ExternalFoldersCollection([]);
  }

  /**
   * Set export folders
   * @param {ExternalFoldersCollection} collection The collection of folders to export
   */
  set exportFolders(collection) {
    if (!(collection instanceof ExternalFoldersCollection)) {
      throw new TypeError("exportFolders must be a valid ExternalFoldersCollection instance");
    }
    this._export_folders = collection;
  }

  /*
   * ==================================================
   * Static properties getters
   * ==================================================
   */

  /**
   * ExportResourcesFileEntity.ENTITY_NAME
   * @returns {string}
   */
  static get ENTITY_NAME() {
    return ENTITY_NAME;
  }

  /**
   * ExportResourcesFileEntity.SUPPORTED_FILE_TYPES
   * @returns {array<string>}
   */
  static get SUPPORTED_FORMAT() {
    return [
      ExportResourcesFileEntity.FORMAT_KDBX,
      ExportResourcesFileEntity.FORMAT_CSV_KDBX,
      ExportResourcesFileEntity.FORMAT_CSV_LASTPASS,
      ExportResourcesFileEntity.FORMAT_CSV_1PASSWORD,
    ];
  }

  /**
   * ExportResourcesFileEntity.FORMAT_KDBX
   * @returns {string}
   */
  static get FORMAT_KDBX() {
    return FORMAT_KDBX;
  }

  /**
   * ExportResourcesFileEntity.FORMAT_CSV_KDBX
   * @returns {string}
   */
  static get FORMAT_CSV_KDBX() {
    return FORMAT_CSV_KDBX;
  }

  /**
   * ExportResourcesFileEntity.FORMAT_CSV_LASTPASS
   * @returns {string}
   */
  static get FORMAT_CSV_LASTPASS() {
    return FORMAT_CSV_LASTPASS;
  }

  /**
   * ExportResourcesFileEntity.FORMAT_CSV_1PASSWORD
   * @returns {string}
   */
  static get FORMAT_CSV_1PASSWORD() {
    return FORMAT_CSV_1PASSWORD;
  }
}

exports.ExportResourcesFileEntity = ExportResourcesFileEntity;
