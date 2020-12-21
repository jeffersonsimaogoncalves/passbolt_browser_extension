/**
 * Main include file.
 *
 * @copyright (c) 2017 Passbolt SARL
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */

/* ===================================================================================
 *  Events
 *
 *  Events help the addon code interact with content code via content/workers
 *  given by the pagemod. Read more about it here:
 *  https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/content_worker
 *
 *  These section contain events includes that is reusable by the listeners
 *  themselves. This allows to factorize some code common to many listeners.
 *  For example multiple listeners will be will interested in sending/receiving
 *  encryption and decryption events.
 * ==================================================================================
 */
var events = {};
events.app = require('./event/appEvents');
events.appBootstrap = require('./event/appBootstrapEvents');
events.actionLogs = require('./event/actionLogEvents');
events.auth = require('./event/authEvents');
events.clipboard = require('./event/clipboardEvents');
events.comment = require('./event/commentEvents');
events.config = require('./event/configEvents');
events.debug = require('./event/debugEvents');
events.exportResources = require('./event/exportResourcesEvents');
events.favorite = require('./event/favoriteEvents');
events.file = require('./event/fileEvents');
events.folder = require('./event/folderEvents');
events.group = require('./event/groupEvents');
events.importResources = require('./event/importResourcesEvents');
events.keyring = require('./event/keyringEvents');
events.quickAccess = require('./event/quickAccessEvents');
events.multiFactorAuthentication = require('./event/multiFactorAuthenticationEvents');
events.pagemod = require('./event/pagmodEvents');
events.recover = require('./event/recoverEvents');
events.resource = require('./event/resourceEvents');
events.secret = require('./event/secretEvents');
events.setup = require('./event/setupEvents');
events.share = require('./event/shareEvents');
events.tab = require('./event/tabEvents');
events.tag = require('./event/tagEvents');
events.theme = require('./event/themeEvents');
events.user = require('./event/userEvents');
events.siteSettings = require('./event/siteSettingsEvents');

exports.events = events;

/* ==================================================================================
 *  Page mods
 *  Run scripts in the context of web pages whose URL matches a given pattern.
 *  see. https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod
 * ==================================================================================
 */
/*
 * Each pagemod triggers a worker that can be used to communicate between the add-on and content code.
 * We need to store these workers in a global objects because they need to be able to
 * communicate with each other
 */
var workers = {};
exports.workers = workers;

/*
 * Content code callbacks are UUIDs generated by the content code and mapped with an anonymous
 * function on the content code side. This UUID is given to the add-on code when the content code
 * is triggering a request for a process managed at the addon level such as encrypt or decrypt.
 * We cannot give directly the function reference since the add-on and content code can only
 * communicate via text.
 */
var callbacks = {};
exports.callbacks = callbacks;

/*
 * We use this variables to store the references to the pagemods
 * It is usefull for example to re-initialize pagemods after a configuration changes
 * for example when you change the list of domains that you are running passbolt on
 */
var pageMods = {};

/*
 * This pagemod allows inserting classes to help any page
 * to know about the status of the extension, in a modernizr fashion
 * It also helps the plugin to recognise if a page behave like a passbolt app
 */
pageMods.WebIntegration = require('./pagemod/webIntegrationPagemod').WebIntegration;

/*
 * This pagemod drives the main addon app
 * It is inserted in all the pages of a domain that is trusted.
 * Such trust is defined during the first step of the setup process (or in config-debug)
 */
pageMods.AppBoostrap = require('./pagemod/appBoostrapPagemod').AppBoostrap;

/*
 * This pagemod drives the react application.
 */
pageMods.App = require('./pagemod/appPagemod').App;

/*
 * This pagemod drives the login / authentication
 */
pageMods.AuthBootstrap = require('./pagemod/authBootstrapPagemod').AuthBootstrap;

/*
 * This pagemod drives the login passphrase capture
 */
pageMods.Auth = require('./pagemod/authPagemod').Auth;

/*
 * This pagemod help bootstrap the first step of the setup process from a passbolt server app page
 * The pattern for this url, driving the setup bootstrap, is defined in config.json
 */
pageMods.SetupBootstrap = require('./pagemod/setupBootstrapPagemod').SetupBootstrap;

/*
 * This page mod drives the reset of setup process
 * The reset of the setup process is driven on the add-on side, see in ../data/passbolt-iframe-setup.html
 */
pageMods.Setup = require('./pagemod/setupPagemod').Setup;

/*
 * This pagemod help bootstrap the first step of the recover process from a passbolt server app page
 * The pattern for this url, driving the recover bootstrap, is defined in config.json
 */
pageMods.RecoverBootstrap = require('./pagemod/recoverBootstrapPagemod').RecoverBootstrap;

/*
 * This page mod drives the reset of recover process
 * The reset of the setup process is driven on the add-on side, see in ../data/passbolt-iframe-recover.html
 */
pageMods.Recover = require('./pagemod/recoverPagemod').Setup;

/*
 * This page mod drives the reset of setup process
 * The reset of the setup process is driven on the add-on side, see in ../data/quickaccess.html
 */
pageMods.QuickAccess = require('./pagemod/quickAccessPagemod').QuickAccess;

/*
 * This pagemod drives the clipboard iframe tool
 */
pageMods.Clipboard = require('./pagemod/clipboardPagemod').Clipboard;

/*
 * This pagemod drives the file iframe tool
 */
pageMods.File = require('./pagemod/filePagemod').File;

/*
 * This page mod drives a convenience config page for debug
 * This allows to not have to go through the setup process steps
 * and perform changes useful for testing that would otherwise break things
 * Like for example changing the public key only on the client but not the server
 */
pageMods.Debug = require('./pagemod/debugPagemod').Debug;

exports.pageMods = pageMods;
