/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) Passbolt SARL (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         3.4.0
 */

/**
 * Get the current tab
 */
async function getCurrent() {
  const tabs = await browser.tabs.query({active: true, currentWindow: true});
  return tabs[0];
}

/**
 * Get by Id
 * @param id
 */
async function getById(id) {
  const tabs = await browser.tabs.query({});
  return tabs.find(tab => tab.id === parseInt(id));
}

exports.BrowserTabService = {
  getCurrent: getCurrent,
  getById: getById,
};
