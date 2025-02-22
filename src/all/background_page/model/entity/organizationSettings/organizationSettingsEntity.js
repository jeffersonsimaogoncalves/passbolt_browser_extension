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
 * @since         3.2.0
 */
const {Entity} = require('../abstract/entity');
const {EntitySchema} = require('../abstract/entitySchema');

const ENTITY_NAME = "OrganizationSettings";

// Organization status
const ORGANIZATION_ENABLED = 'enabled';
const ORGANIZATION_DISABLED = 'disabled';
const ORGANIZATION_NOT_FOUND = 'not found';

class OrganizationSettingsEntity extends Entity {
  /**
   * Organization settings entity constructor
   *
   * @param {Object} organizationSettingsDto organization settings DTO
   * @throws EntityValidationError if the dto cannot be converted into an entity
   */
  constructor(organizationSettingsDto) {
    // Default properties values
    const props = Object.assign(OrganizationSettingsEntity.getDefault(), organizationSettingsDto);

    super(EntitySchema.validate(
      OrganizationSettingsEntity.ENTITY_NAME,
      props,
      OrganizationSettingsEntity.getSchema()
    ));
  }

  /**
   * Get default properties values
   * @return {object}
   */
  static getDefault() {
    return {
      "status": OrganizationSettingsEntity.ORGANIZATION_ENABLED
    };
  }

  /**
   * Get entity schema
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      "type": "object",
      "required": [

      ],
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            OrganizationSettingsEntity.ORGANIZATION_ENABLED,
            OrganizationSettingsEntity.ORGANIZATION_DISABLED,
            OrganizationSettingsEntity.ORGANIZATION_NOT_FOUND
          ]
        },
        "app": {
          "type": "object"
        },
        "passbolt": {
          "type": "object"
        },
      }
    };
  }

  /**
   * Return a disabled organization settings.
   */
  static get disabledOrganizationSettings() {
    return {
      status: this.ORGANIZATION_DISABLED
    };
  }

  /*
   * ==================================================
   * Serialization
   * ==================================================
   */
  /**
   * Return a DTO ready to be sent to API or content code
   * @returns {object}
   */
  toDto() {
    return Object.assign({}, this._props);
  }

  /**
   * Customizes JSON stringification behavior
   * @returns {*}
   */
  toJSON() {
    return this.toDto();
  }

  /*
   * ==================================================
   * Dynamic properties getters
   * ==================================================
   */

  /**
   * Get organization locale.
   * @returns {string}
   */
  get locale() {
    return this._props.app && this._props.app.locale;
  }

  /**
   * Check if a plugin is enabled
   * @param {string} name The plugin name
   * @returns {boolean}
   */
  isPluginEnabled(name) {
    const plugin = this._props?.passbolt?.plugins?.[name];

    // If the plugin exists and is not marked as disabled, it's considered enabled. i.e. enabled propery not present => enabled
    return plugin && plugin?.enabled !== false;
  }

  /**
   * Get the plugin settings
   * @param {string} name The plugin name
   * @returns {object}
   */
  getPluginSettings(name) {
    if (this.isPluginEnabled(name)) {
      return this._props.passbolt.plugins[name];
    }
  }

  /*
   * ==================================================
   * Static properties getters
   * ==================================================
   */
  /**
   * OrganizationSettingsEntity.ENTITY_NAME
   * @returns {string}
   */
  static get ENTITY_NAME() {
    return ENTITY_NAME;
  }

  /**
   * OrganizationSettingsEntity.ORGANIZATION_ENABLED
   * @returns {string}
   */
  static get ORGANIZATION_ENABLED() {
    return ORGANIZATION_ENABLED;
  }

  /**
   * OrganizationSettingsEntity.ORGANIZATION_DISABLED
   * @returns {string}
   */
  static get ORGANIZATION_DISABLED() {
    return ORGANIZATION_DISABLED;
  }

  /**
   * OrganizationSettingsEntity.ORGANIZATION_NOT_FOUND
   * @returns {string}
   */
  static get ORGANIZATION_NOT_FOUND() {
    return ORGANIZATION_NOT_FOUND;
  }
}

exports.OrganizationSettingsEntity = OrganizationSettingsEntity;
