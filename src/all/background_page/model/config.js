/**
 * Config model.
 *
 * @copyright (c) 2017 Passbolt SARL
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */

const _config = require('../config/config.json');

/**
 * Init the configuration.
 * Retrieve and load the configuration stored in the local storage.
 */
const init = function() {
  // Retrieve the config from the local storage
  const storedConfig = storage.getItem('config');

  // No config in local storage, do nothing
  if (storedConfig === null) {
    return;
  }

  // Merge the config.json and config stored in local storage
  for (const name in storedConfig) {
    // only defined items not already defined in config.json
    if (typeof _config[name] === 'undefined') {
      _config[name] = storedConfig[name];
    }
  }
  migrate();
};
exports.init = init;

const migrate = function() {
  const storedConfig = storage.getItem('config');
  if (typeof storedConfig['debug'] !== 'undefined') {
    /*
     * v2.1.0 Migration - Delete unused config items
     * TODO - remove after next release
     */
    storage.removeItem('config', 'setupBootstrapRegex');
    storage.removeItem('config', 'debug');
    storage.removeItem('config', 'log');
    storage.removeItem('config', 'baseUrl');
    storage.removeItem('config', 'extensionId');
  }
};
exports.migrate = migrate;

/**
 * Read a configuration variable.
 *
 * @param name {string} Variable name to obtain
 * @returns {*}
 */
const read = function(name) {
  if (typeof _config[name] !== 'undefined') {
    return _config[name];
  }
  return undefined;
};
exports.read = read;

/**
 * Read all configuration variables.
 *
 * @returns {array}
 */
const readAll = function() {
  return _config;
};
exports.readAll = readAll;

/**
 * Set a configuration variable.
 *
 * @param name {string} Variable name to store
 * @param value {mixed} Variable value
 * @returns {boolean}
 */
const write = function(name, value) {
  // do not allow to override the debug mode
  if (name === 'debug') {
    return false;
  }
  _config[name] = value;
  storage.setItem('config', _config);
  return true;
};
exports.write = write;

/**
 * Is debug enabled?
 *
 * @returns {bool}
 */
const isDebug = function() {
  const debug = read('debug');
  if (typeof debug === 'undefined') {
    return false;
  } else {
    return debug;
  }
};
exports.isDebug = isDebug;

/**
 * Flush the local storage config.
 */
const flush = function() {
  storage.removeItem('config');
};
exports.flush = flush;
