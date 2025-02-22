# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
## [3.5.0] - 2021-01-12
### Added
- PB-13161 As LU I should be able to passbolt with my Android mobile
- PB-13161 As LU I should be able to passbolt with my IOS mobile
- PB-13321 As a user I can use passbolt in Dutch
- PB-13321 As a user I can use passbolt in Japanese
- PB-13321 As a user I can use passbolt in Polish

### Improved
- PB-9402 As LU I should be able to create and import passwords having a name and username of 255 characters long
- PB-13178 As a user visiting the web stores I should be aware that the application supports multiple languages
- PB-9748 Optimize in-form menu integration performance by avoiding the CTA mutation observer to be called when passbolt manipulates the DOM itself

### Security
- PB-13162 Upgrade QRCode library to v1.5.0

### Fixed
- PB-12819 Fix as LU I should autofill/auto-save on forms having only a password field
- GITHUB-136 Fix as LU I want to see the in-form menu CTA well positioned on pages having no scroll but CSS transformation
- GITHUB-137 Fix as a user I should see the in-form menu CTA on modal having a z-index greater that 1000
- PB-13268 As LU I should be able to put comma in my user names
- PB-12873 As LU I shouldn’t see double escaped characters on the translation of strings including variables

### Maintenance
- PB-12955 Fix error and warning messages in unit test console
- PB-13309 Upgrade dev dependency webpack-dev-server to v4.7.2

## [3.4.0] - 2021-12-01
### Added
- PB-9826 As a user I want to use passbolt natively on Edge
- PB-1743 As LU I want to tag resource using drag and drop
- PB-8372 As LU I want to see the quickaccess application in dark mode
- PB-8371 As LU I want to see the login screen in dark mode
- PB-8371 As AN I want to see the recover & setup screens in dark mode as per my OS preferences

### Improvement
- PB-9374 As LU I want to see the loading text translated in all the setup/recover screens
- PB-9374 As LU I want to see the next button translated in all the setup/recover screens
- PB-8521 As LU I want to preview my passphrase when I sign-in with the quickaccess
- PB-8521 As LU I want to preview the password protecting a kdbx when I import a kdbx protected by password
- PB-9292 As LU I want to see the neat grids checkboxes
- PB-8935 As LU changing my passphrase I want to see my security token when my current passphrase is requested
- PB-9315 As AN I want to see some space between my name and my avatar on the login screen
- PB-9318 As LU already logged in I don't want to see any error when I try to sign-in again

### Fixed
- PB-9316 Fix as LU I don't want to see a padding at the right of the quickaccess right after signing in
- PB-9759 Fix as LU I don't want to see in form menu CTA if the associated input field was removed from the DOM
- PB-9376 Fix as LU I want to see the sub-folders caret aligned with the sub-folders names
- PB-8900 Fix as LU I don't want to see the sub-folders of the last folder displayed on top of the tags section
- PB-9648 Fix as LU I don't want to see in form menu CTA displayed out of its associated input field
- PB-9409 Fix as LU I don't want to see a dead link on the update my passphrase settings screen
- PB-8934 Fix as LU I want to see the key UI in the key inspector screen of the profile instead of my account full name
- PB-9410 Fix as LU changing my passphrase I should see the processing button aligned with the other form button
- PB-9321 Fix spelling mistakes reported by the community
- PB-9287 Fix as LU I want to see the text displayed in the recovery process "check your email" screen will the right size
- PB-8939 Fix as LU I don't want to see the progress dialog current operation details on 2 lines
- PB-9286 Fix as LU I want to see the locale dropdown field of the setup/recover screen well positioned
- PB-8938 Fix as LU previewing a password in the resource details sidebar I don't want to see the password spread over 2 lines
- PB-8937 Fix as LU previewing a password in the grid I don't want to see the password spread over 2 lines
- PB-9285 Fix as LU uploading an invalid avatar I want to see an error having the same style as other form fields errors
- PB-9331 Fix as LU I should not see the in-form menu CTA on the passbolt trusted domain
- PB-9317 Fix theme selection screen does not work when server url is not a TLD

### Security
- SEC-315 fix Upgrade validator dependency

### Maintenance
- PB-8523 Ignore "src/css" folder in styleguide dependency npm package
- PB-8432 Improve the way styles are loaded in storybook
- PB-5897 Add language switch in storybook for all components
- PB-8374 Lint background page source code

## [3.3.1] - 2021-10-26
### Fixed
- PB-9388 Fix unnecessary organization settings API calls

## [3.3.0] - 2021-10-20
### Added
- PB-7608 As LU I should be able to customize the password generator parameters
- PB-7608 As LU I should be able to use emojis in the generated passwords
- PB-7608 As LU I should be able to generate passphrase instead of passwords
- PB-7606 As LU I should be able to see how many credentials are suggested for the page I’m currently on by looking at the passbolt icon in the toolbar
- PB-7649 As LU I should be prompted to save a new credential when I generate a password for a new sign-up form
- PB-7683 As LU I should be able to auto-fill a suggested credential directly from inside an authentication form
- PB-7693 As LU I should be able to generate a password directly from inside a sign-up form
- PB-8189 As a user should be able to use the application in German or Swedish
- PB-6034 As LU I should be able to configure my mobile [experimental]

### Improvement
- PB-7639 As LU I should be able to import folders containing slash in their names
- PB-8256 As LU I should be able to see the username and password fields pre-filled when I create a password with the quickaccess
- PB-8088 As LU I should not see the quickaccess passphrase capture screen shaking when it appears
- PB-7599 As AN installing the extension on chrome I should be able to see instructions regarding how to pin the extension in the toolbar
- PB-7626 As LU I should be able to auto-fill a form by directly clicking on a credential suggested by the browser extension quickaccess without seeing the credential details first
- PB-6132 As LU I should be able to see the role column inside the users grid
- As LU I should be able to see my quickaccess with a larger wi

### Fixed
- PB-7813 Fix as LU I shouldn't be able to export from the folders section label if the exports feature is disabled
- PB-8306 Fix as LU I should see a content skeleton during loading on the share dialog of the application
- PB-8525 Fix as LU signing-in for the first time with the quickaccess I should be able  to see the tags category
- PB-7364 As GM I should not see the group name editable in the group edit dialog

### Security
- PB-8368 Password secret complexity calculation algorithm should take in account graphemes
- PB-8453 Mark password fields that are viewable as not auto-completable
- PB-8455 Update dependencies, remove unused grunt-contrib-concat

### Maintenance
- PB-8367 Add code coverage automation
- PB-8492 Optimize passbolt-styleguide dependency package size
- PB-7575 Remove jQuery dependency
- PB-6057 Remove underscore dependency

## [3.2.3] - 2021-06-07
### Fixed
- PB-7561 Fix as LU I should import CSV containing non latin1 characters
- PB-7563 Update passbolt styleguide dependencies

## [3.2.2] - 2021-05-31
### Fixed
- PB-7569 As AN with an unconfigured extension on chrome I should not get an error clicking on the toolbar passbolt icon

## [3.2.1] - 2021-05-26
### Added
- PB-5054 French internationalization
- PB-5526 As AD I can manage the subscription key from the administration panel

### Fixed
- PB-5366 Fix share autocomplete search results can be invalid
- PB-5498 Fix image version displayed after avatar upload
- PB-5861 Fix serializePlaintextDto should validate secret maxlength if resourceTypeId is set to legacy type, or not set
- PB-5909 Fix as LU aborting a preview operation I should not see an empty preview
- PB-5983 Fix as LU I can import passwords with non latin characters
- PB-6008 Fix as LU I should get a feedback in the quickaccess when I try to autofill credentials on a page, but an error occurred
- PB-6080 Fix add favorites fetch payload error

### Improvement
- PB-5443 As LU I should get a visual feedback when the maximum length of the secret fields is reached so that I do not loose data
- PB-5455 As LU selecting a description order to copy it should not enter the description edit mode
- PB-5496 As LU updating my avatar I should see the error message if an error occurred
- PB-5857 As LU I should be able to change the user role in the create/edit user dialog by clicking on the checkbox label

### Security
- PB-6012 Fix the quickaccess suggestion component should not suggest TLD entries (PB-01-002)

### Maintenance
- PB-5069 Migrate moment to Luxon
- PB-5884 Move quickaccess front end code to the styleguide repository
- PB-5887 Fix semantic gap in naming conventions in styleguide
- PB-5959 Bump webpack to v5

## [3.1.0] - 2021-03-17
### Added
- PB-4924 As LU I should be able to edit my security token
- PB-4917 As LU I should be able to change my passphrase
- PB-3550 As LU I can preview a password in the passwords grid
- PB-3575 As LU I can preview a password in the quick access
- PB-3570 As LU I can preview a password in the password details sidebar

### Fixed
- PB-5437 As LU I should see the group edit dialog when I follow a group edit permalink
- Allow resizing of textarea

## [3.0.7] - 2021-03-04
### Fixed
- GITHUB-156 Fix import/export and legacy API v2

## [3.0.6] - 2021-03-02
### Fixed
- Fix missing chevron image in quickaccess
- Remove EJS from dependencies
- Fix import of keepass file containing entries with undefined field
- Fix import should not throw an error if a resource or a folder cannot be created
- GITHUB-381 Fix quickaccess and custom fields. Lazy load resource types local storage on demand.
- PB-5154 Fix autofill and username field without type property defined

## [3.0.5] - 2021-02-03
### Fixed
- Fix keep session alive

## [3.0.4] - 2021-02-03
### Fixed
- Allow decryption with rsa signing key to work around old openpgpjs bug
- Pre sanitize data prior to collections/entity creation for the following operations: local storage update (resources, groups, users), user and avatar update, group update

## [3.0.3] - 2021-01-28
### Fixed
- Fix do not enforce validation for gpgkey with type property set to null
- Fix do not enforce validation for gpgkey with bits property set to null

## [3.0.2] - 2021-01-27
### Fixed
- Fix allow favorites with non conforming v1 data

## [3.0.1] - 2021-01-27
### Fixed
- Fix do not enforce validation error for tags with slug duplicates
- Fix do not enforce validation for avatar with empty user_id

## [3.0.0] - 2021-01-27
### Added
- Add a new login page and process redesign
- Add a new setup pages and process redesign
- Add a new recovery page and process redesign
- Add request passphrase prior to downloading the private key in user workspace
- Add the ability to sort by favorites
- Add the ability to encrypt description
- Add baseline support for other resource types

### Improved
- Migrate user workspace code previously served by server in the extension
- Migrate password workspace code previously served by server in the extension
- Migrate user profile code previously served by server in the extension
- Migrate the front-end code from CanJS to React
- Improve import export speed and misc compatibility improvements
- Improve server data validation in background page
- Misc update of dependencies
- Misc fixes of small styling issues in user and password workspace

### [2.13.8] - 2020-09-09
### Fixed
- PB-3519 Fix inherited permissions are not updated on share with nested folder and resources

### [2.13.7] - 2020-09-09
### Fixed
- Fix terminate any active session if user starts another account recovery / setup.
- Fix local storage / session should not be flushed when window is closed.

### Added
- Add codeql-analysis.yml for Github code analysis

### [2.13.6] - 2020-08-06
### Fixed
- PB-1416 As LU deleting a folder it should update the resources local storage
- PB-1417 As LU importing resources it should update the resources local storage

### Improved
- PB-1418 As LU deleting resources it should update the resources local storage after each delete (improve the feedback)

## [2.13.5] - 2020-07-22
### Fixed
- Fix autofill should work when input type is not lowercase
- Fix export to CSV should work if export does not include the resource associated folder

## [2.13.4] - 2020-06-23
### Added
- Increase the number of passwords the quickaccess suggests
- PB-1290 As a user I can choose which permission changes strategy to apply on a move
- PB-1326 Add support for signatures on share and import encryption operations

### Improvements
- PB-1348 Performance. Openpgpjs version bump v4.10.4

### Fixed
- Fix CSV import and export should support folders
- Fix progress bar should never be more than 100%
- GITHUB-238: As an administrator I should be able to install passbolt on a domain without a TLD.
- BUGZILLA-1372288: Hide extension URL from page when inserting iframe in a content script

## [2.13.3] - 2020-06-05
### Fixed
- Fix import folders batch issue

## [2.13.2] - 2020-06-03
### Fixed
- Fix resource URI can be null or a string
- Fix folder rename issue
- Fix export with large amount of resources issue
- Fix bulk move large amount of resources with the same folder parent issue
- Fix bulk share with large amount of resources

## [2.13.1] - 2020-05-29
### Fixed
- Fix direct export of resources/folders with a parent not included in export group
- Fix share folder/resource dialog should display item name
- Fix move shared folder cases where the permissions should not change
- Fix move shared resources cases where the permissions should not change
- Fix the response to the event 'passbolt.share.get-folders' should return an array
- Fix transform entity to dto before port.emit
- Fix linting

## [2.13.0] - 2020-05-28
### Added
- PB-658 Add folder create dialog and service
- PB-658 Add rename folder dialog
- PB-658 Add select and scroll to a folder after creation
- PB-658 Add store folder in local storage when logged in
- PB-658 Add create a resource or folder into a folder
- PB-658 Add support for creating resource with parent permissions
- PB-658 Add support for creating folder with parent permission
- PB-658 Add loading state to share dialog
- PB-658 Add folder share recursive
- PB-658 Add folders move in bulk (resources and folders)
- PB-658 Add support for multi resource move with permissions changes
- PB-658 Add folder delete dialog
- PB-658 Add cascading folders delete
- PB-1059 As a user I can import folders from a kdbx file
- PB-1059 As a user I can export resources and folders to a kdbx file

### Fixes
- Fix package-lock.json and rebuild extensions
- Fix share dialog autocomplete search, only the last API query result should be shown.
- Fix file format for export and file download by adding mime type.
- Fix linting
- Fix react app pagemod
- Fix React app to supports theme changes

### Improvements
- PB-799 Migrate share to react
- PB-799 Migrate resource edit dialog to react
- Add support for structured model entities
- Add npm version in package.json
- Do not display the domain the extension is configured for when triggering reconfig on another.
- Fix backward compatibility with v2.12
- PB-1089: Bump dependencies to higher versions
- Styleguide update

## [2.12.3] - 2020-05-18
### Fixed
- Add support to replace server OpenPGP public key when expired or replaced
- Fix error message on Firefox (insert script return value must be structured-clonable)
- Fix quickaccess create password field should be max 4096 characters in length

## [2.12.2] - 2020-04-14
### Fixed
- PB-1209: Bump jQuery to v3.5

## [2.12.1] - 2020-03-04
### Improved
- PB-1089: Bump dependencies to higher versions

## [2.12.0] - 2019-12-05
### Improved
- PB-649: The quickaccess passphrase field text and background colors should remain as default when the field is not focused.

### Fixed
- GROOVE-1610: Fix share operation should not fail silently
- GITHUB-84: Fix high server session timeout setting can lead to constant sessions check in legacy systems
- PB-879: Fix the setup security token validation bug
- PB-883: The quickaccess suggestion should filter passwords by uri protocol and port if provided.
- PB-766: Fix 414 server issues for features that work with batch of resources. Reduce the size of the batches.

## [2.11.3] - 2019-11-28
- GROOVE-1605 Revert to OpenPGP v2.6.2

## [2.11.2] - 2019-11-19
- PB-847: The quickaccess should suggest resources only if the current tab domain matches or is a subdomain of the resource uri.

## [2.11.1] - 2019-09-16
- PB-125: Sessions should be extended by default when user ask to remember passphrase.

## [2.11.0] - 2019-08-08
### Improved
- PB-242: Add local storage resources capabilities to manipulate the resources (add, delete, update)
- GITHUB-79: Improve autofill compatibility, trigger an input event instead a change event while filling forms
- PB-278: #GITHUB-61: Improve autofill compatibility, support Docker and AWS forms
- PB-432: Improve autofill compatibility, support reddit.com
- PB-433: Improve autofill compatibility, support Zoho CRM
- GITHUB-78: Improve autofill compatibility, fill only username if no password fill present
- PB-494: Improve autofill compatibility, ignore hidden fields
- PB-514: Improve autofill compatibility, fill iframe forms

### Fixed
- PB-544: Fix login passphrase remember me and quickaccess
- PB-533: Fix session expired management
- PB-515: Autofill should not fill if the url in the tab have changed between the time the user clicked on the button to fill and the data is sent to the page.

## [2.10.2] - 2019-07-10
- GITHUB-66: The browser extension doesn't build by default on unix system
- GITHUB-70: Fix autofill for self-hosted GitLab instance does not work
- GITHUB-71: Fix autofill for openstack horizon does not work
- PB-449: Fix image url when using non local image storage
- PB-449: Fix auth redirect when passbolt is installed in directory

### Improved
- Update the resources local storage when add, delete or update resources

## [2.10.1] - 2019-05-17
### Fixed
- Fix suggested section typo

## [2.10.0] - 2019-05-17
### Added
- PB-189: Quickaccess: As LU I can browse my passwords with the quickaccess using filters

### Fixed
- PB-40: Quickaccess: Don't hide not sanitized uri in the resource view screen

## [2.9.2] - 2019-04-25
### Fixed
- PB-227: Fix browser extension backward compatibility with API < v2.2.0

## [2.9.1] - 2019-04-25
### Fixed
- PB-3: Quickaccess: Fix resource create screen styleguide

## [2.9.0] - 2019-04-24
### Add
- PB-3: Quickaccess: As LU I can add a password via the quickaccess

## [2.8.3] - 2019-04-17
### Fixed
- GITHUB-58: Use consistent wording to define a gpg private key passphrase
- GITHUB-64: As AP when I am logging in with the quickaccess I should see a relevant error message in any cases
- GITHUB-63: Fix password generation mask
- PB-177: Upgrade Jquery to v3.4
- PB-178: Drop fetch polyfill for chrome
- PB-153: Fix dictionary test result when pwnedpassword is unavailable
- GITHUB-14: As LU I should be able to navigate into the passphrase popup with the keyboard

## [2.8.2] - 2019-04-02
### Fixed
- Fix broken event. Exception has to be serialized before emiting them from addon to content code
- Fix typo in README

## [2.8.1] - 2019-04-02
### Fixed
- PB-97: Fix - As a user I cannot login using the QuickAccess if i'm using MFA

## [2.8.0] - 2019-04-01
### Add
- PB-3: Quickaccess: Simplified app to access passwords from the browser extension

## [2.7.0] - 2019-02-08
### Improvement
- PASSBOLT-3347: When the extension requires the users to enter their master password, the popup should be displayed with no delay
- PASSBOLT-3313: As GM adding a user to a group I should see the loading popup when the extension is processing/requesting the API
- PASSBOLT-3312: As GM adding a user to a group I should see a relevant feedback in case of network/proxy errors
- PASSBOLT-3316: As LU Sharing a password I should see a loading feedback when the extension is requesting the API
- PASSBOLT-3318: As LU I should retrieve a secret when I'm copying it
- PASSBOLT-3319: As LU I should retrieve a secret when I'm editing it
- PASSBOLT-3403: As LU I should retrieve secrets when I'm exporting the associated passwords

## [2.4.6] - 2018-12-18
### Fix
- Update to openpgpjs to v4.3.0

## [2.4.5] - 2018-12-04
### Fix
- PASSBOLT-3256: Fix the bulk share passwords feature which could have forgot passwords when a user is sharing more than 100 passwords

## [2.4.4] - 2018-11-08
### Fix
- GITHUB-52 As AP I should be able to generate a gpg key with a comment

## [2.4.3] - 2018-11-05
### Add
- PASSBOLT-3093: As LU I can select all passwords to perform a bulk operation

### Fix
- Update openpgpjs to v4.2.0

## [2.4.2] - 2018-10-26
### Fix
- Fix copy to clipboard does not work on firefox when focus is set on search text input

## [2.4.1] - 2018-10-15
### Fix
- Fix application pagemod not starting after mfa verification

## [2.4.0] - 2018-10-12
### Added
- PASSBOLT-2983: As LU I should be able to share multiple passwords in bulk

### Improved
- PASSBOLT-2981: As Pro LU importing a large set of passwords I should request the API by batch
- PASSBOLT-3074: As a logged in user selecting a "remember me" duration the  checkbox should be selected automatically

### Fix
- PASSBOLT-3022: Fix the "import tag" is not associated to passwords imported from a csv where have no category

## [2.2.1] - 2018-08-14
### Fix
- Fix login redirect issue, it should not redirect to / if passbolt is installed in a subfolder

## [2.2.0] - 2018-08-13
### Fix
- Fix setup fatal error should not trigger a redirect
- PASSBOLT-2940 AppPagemod should start on the routes of the appjs /app/*

## [2.2.0] - 2018-08-09
### Fix
- Fix setup fatal error should not trigger a redirect
- PASSBOLT-2940 AppPagemod should start on the routes of the appjs /app/*

## [2.1.0] - 2018-06-14
### Add
- Add support for dark theme
- Add check if passphrase is part of a dictionary

### Fix
- Fix press escape to close master password dialog regression
- GITHUB-268 Fix remember me checkbox label should be clickable
- GITHUB-46 Fix security token validation regression
- PASSBOLT-2854 [Pro] Fix bug tags imported are always the same
- PASSBOLT-2887 [Pro] Fix iframe resize issue
- PASSBOLT-2883 Fix logout link and remember me cleanup

## [2.0.10] - 2018-06-07
### Fix
- Fix export of kdbx contain test values

## [2.0.9] - 2018-05-23
### Fix
- Fix content scripts should not be inserted if they are already present.
- Fix auth pagemod should insert script when a redirection is set in url
- Fix json.headers should be json.header

## [2.0.8] - 2018-05-09
### Fix
- Fix backward compatibility issue with user search API

## [2.0.7] - 2018-05-09
### Fix
- Fix backward compatibility issue with legacy API.

## [2.0.6] - 2018-05-08
### Fix
- Temporarily rollback of v2.0.5 as it break compatibilty with API version < v1.6.10

## [2.0.5] - 2018-05-08
### Fix
- PASSBOLT-2857: Fix password generator does not use secure PRNG
- GITHUB-35: Fix login redirects in wrong tab
- PASSBOLT-2764: Fix share autocomplete search concurrency issue on result display

### Improve
- PASSBOLT-2853: Upgrade to OpenPGP.js 3.x
- PASSBOLT-2853: Improve error feedback on login
- PASSBOLT-2853: Cleanup config defaults

## [1.6.10] - 2018-03-28
### Fixed
- PASSBOLT-2774: Fix download in chrome 65
- PASSBOLT-2777: Manage third party libraries with npm
- PASSBOLT-2709: [Pro] As LU I can use the remember me feature on the login form
- PASSBOLT-2707: [Pro] As LU I can choose the duration passbolt remember my passphrase in a set of options
- PASSBOLT-2648: [Pro] As LU I can import passwords from kdbx or csv
- PASSBOLT-2655: [Pro] As LU I can export my passwords in kdbx or csv

## [1.6.9] - 2018-02-13
### Fixed
- GITHUB-38: Fix to allow password to be remembered for 5 minutes when Enter is pressed
- GITHUB-39: Fix Firefox plugin claiming to be Chrome on wrong domain template
- PASSBOLT-2677: Add version number to all API calls
- PASSBOLT-2677: Fix recover link is wrong when optional redirect parameter is set in url
- PASSBOLT-2677: Bump dependencies to higher versions

## [1.6.8] - 2017-12-28
### Fixed
- PASSBOLT-2558: Security fix content scripts should not be injected on non trusted domain
- PASSBOLT-2558: Wordsmith verify feature help text
- PASSBOLT-2199: Drop jpm from list of dependencies
- PASSBOLT-2199: Fix key import key info screen control flow
- PASSBOLT-2199: Fix register link
- PASSBOLT-2199: Add alternative Gpgkey key property armored_key prior to API v2 rollout
- PASSBOLT-2474: Add new github contribution guidelines and issue templates

## [1.6.7] - 2017-10-13
### Fixed
- PASSBOLT-2452: Fix broken template on stage0 missing server key
- PASSBOLT-2455: Fix setup should not use browser storage to temporarily store private key

## [1.6.6] - 2017-10-02
### Fixed
- PASSBOLT-2419: Remove FF legacy extension support
- PASSBOLT-2423: Template missing when recovering an account: setup/importKeyRecoverInfo.ejs
- PASSBOLT-2425: Chrome 61, issue with minified version of jquery

## [1.6.5] - 2017-09-14
### Fixed
- PASSBOLT-2386: Enforce the usage of templates instead of manual DOM content insertion

## [1.6.4] - 2017-08-31
### Fixed
- PASSBOLT-2344: Remove content scripts from web accessible resources
- PASSBOLT-2352: Webextension should not use defer(), use native promise instead
- PASSBOLT-2350: Move grunt-passbolt-ejs-template-compile as node module
- PASSBOLT-2370: Plugin upgrade openpgpjs to 2.5.10

## [1.6.3] - 2017-08-21
### Fixed
- PASSBOLT-2318: Remove unsafe-eval from CSP
- PASSBOLT-2318: Precompile EJS templates using grunt-passbolt-ejs-compile task
- PASSBOLT-2269: As LU I can't encrypt a secret for more than 200 people #GITHUB-124
- PASSBOLT-2346: Plugin upgrade openpgpjs to 2.5.9

## [1.6.2] - 2017-08-12
### Added
- PASSBOLT-2198: Migrate from Firefox legacy SDK to embed/native webextensions
- PASSBOLT-2254: Add log system to grab selenium tests traces
- PASSBOLT-2210: Update Grunt build tasks
- PASSBOLT-2200: Update to OpenPGP.js version 2.5.8
- PASSBOLT-2069: Update to JQuery version 3.2.1
- PASSBOLT-2248: Migrate from window.localStorage to chrome.storage on chrome
- PASSBOLT-2283: Migrate from simplestorage to chrome.storage on firefox

## [1.6.0] - 2017-06-21
### Fixed
- PASSBOLT-2078: As GM/AD I shouldn't be able to add a user who didn't complete the registration process to a group I edit/create
- PASSBOLT-2111: As an admin I should be able to install passbolt under mydomain.tld/passbolt

## [1.5.1] - 2017-05-23
### Fixed
- PASSBOLT-1908: Fix memory leak with openpgp webworker initialization

## [1.5.0] - 2017-05-16
### Added
- PASSBOLT-1955: As an administrator I can create a group
- PASSBOLT-1969: As a group manager I can see which users are part of a given group from the group edit dialog
- PASSBOLT-1838: As a group manager I can add a user to a group using the edit group dialog
- PASSBOLT-1838: As a group manager adding a user to a group, the passwords the group has access should be encrypted for the new user
- PASSBOLT-1838: As a group manager I can remove a user from a group using the edit group dialog
- PASSBOLT-1969: As a group manager I can edit the membership roles
- PASSBOLT-1953: As a user I can share a password with a group
- PASSBOLT-1940: As a user when editing a password for a group, the secret should be encrypted for all the members

### Fixed
- PASSBOLT-2031: Share a password with multiple users/groups in a single operation

## [1.4.3] - 2017-02-16
### Updated
- PASSBOLT-1909: updated openpgpjs to latest version: 1.3.7. Thanks to @pomarec for the pull request. (https://github.com/passbolt/passbolt_browser_extension/pull/11)

## [1.4.2] - 2017-02-11
### Fixed
- Fix for chrome 56 memory leak (https://www.passbolt.com/incidents/20170210_chrome_not_available)

## [1.4.0] - 2017-02-07
### Fixed
- PASSBOLT-1850: GITHUB-5 Minor spelling and grammar fixes (@colin-campbell)
- PASSBOLT-1807: Fix parsing issues with keys that have multiple identities

## [1.3.2] - 2017-01-16
### Fixed
- PASSBOLT-1827: As a user I should be able to log in with a passphrase longer than 50 chars in length
- PASSBOLT-1809: As a developer I should be able to get the chrome zip distrib file as part of the build process

## [1.3.1] - 2017-01-03
### Fixed
- PASSBOLT-1606: Wrong message when auto logged out and passbolt is not the active tab
- PASSBOLT-1769: Refactor extension bootstrap, prepare code to welcome future features
- PASSBOLT-1759: Share: autocomplete list will appear even when there is no text entered in the search
- PASSBOLT-1760: Share: image is broken in the autcomplete list after user has changed it
- PASSBOLT-1566: Share autocomplete html is not valid
- PASSBOLT-1778: Simplify toolbarController openPassboltTab function
- PASSBOLT-1680: Password is limited to 50 chars, increase the limit to 4096
- PASSBOLT-1657: As AP I should not be able to complete the recovery process with my public key

## [1.3.0]
### Added - 2016-11-25
- PASSBOLT-1725: Chrome support

### Fixed
- PASSBOLT-1708: Refactor Request get and post to use fetch

## [1.2.0] - 2016-10-16
### Fixed
- PASSBOLT-1668: Refactor GPGAuth to handle capitalization issue. See github #24 & #16
- PASSBOLT-1660: Refactoring ground work for Chrome Extension
- PASSBOLT-1698: Gpgkey is not downloadable after generation

## [1.1.1] - 2016-08-13
### Fixed
- PASSBOLT-1655: Visual glitch on password create field, bump to styleguide v1.1.0
- PASSBOLT-1635: Clean/Document messaging layer

## [1.1.0] - 2016-08-09
### Fixed
- PASSBOLT-1432: Passbolt.app pagemod shouldn't start if user is not logged in

## [1.0.13] - 2016-07-01
### Fixed
- PASSBOLT-1366: Worker bug when multiple passbolt instances are open in multiple windows

### Added
- PASSBOLT-1588: As AN it should be possible to recover a passbolt account on a new device.

## [1.0.12] - 2016-05-31
### Added
- PASSBOLT-959: Added plugin version number in footer.
- PASSBOLT-1488: As AP, I shouldn't be able to complete the setup if I import a key that already exist on server.

### Fixed
- PASSBOLT-1255: Button height issues + missing tooltip on setup

## [1.0.11] - 2016-16-16
### Added
- PASSBOLT-1108: As LU when entering my master key I can have the plugin remember it for 5 min.

### Fixed
- PASSBOLT-1494: After two consecutive setup, the plugin stops working and doesn't start anymore.

## [1.0.10] - 2016-05-03
### Changed
- PASSBOLT-1316: As a AP trying to register again, I should see an information message informing me that the plugin is already configured.


## [1.0.9-b] - 2016-04-25
### Fixed
- PASSBOLT-1457: As LU, I should not be able to create a resource without password.
- PASSBOLT-1441: Wordsmithing: a parenthesis is missing on set a security token step.
- PASSBOLT-1158: Remove all errors (plugin/client) from the browser console at passbolt start.

### Changed
- PASSBOLT-1456: When generating a password automatically it only generates a "fair" level password.

## [1.0.9-a] - 2016-04-15
### Fixed
- PASSBOLT-1408: As a LU I should see the email addresses of the people I'm sharing a password with.

## [1.0.8] - 2016-04-05
### Fixed
- PASSBOLT-1455: As a AP during setup I should not see Learn more broken links.
- PASSBOLT-1158: Cleanup: remove useless console.log() from the code.

## [1.0.7] - 2016-04-04
### Fixed
- PASSBOLT-1158: Cleanup: remove useless console.log() from the code.
- PASSBOLT-1462: Remove spelling mistake on encrypting.

## [1.0.6] - 2016-03-28
### Fixed
- PASSBOLT-1424: Cleanup: in Firefox addon remove URL_PLUBLIC_REGISTRATION.
- PASSBOLT-1417: At the end of the setup, or in case of setup fatal error, setup data should be cleared.
- PASSBOLT-1359: Setup should restart where it was left.


## [1.0.5] - 2016-03-21
### Added
- PASSBOLT-1304: As a LU getting an Error500 when trying to authenticate I should see a retry button.
- PASSBOLT-1310: As user whose account is deleted I should get an appropriate feedback on login.

### Fixed
- PASSBOLT-1377: As LU I should be able to login again after my session timed out.
- PASSBOLT-1381: As LU I should not be able to share a password with a user who is registered but who has not completed his setup
- PASSBOLT-1418: The App worker should be attached only on private pages.

# Terminology
- AN: Anonymous user
- LU: Logged in user
- AP: User with plugin installed
- LU: Logged in user

[Unreleased]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.5.0...HEAD
[3.5.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.4.0...v3.5.0
[3.4.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.3.1...v3.4.0
[3.3.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.3.0...v3.3.1
[3.3.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.2.3...v3.3.0
[3.2.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.2.2...v3.2.3
[3.2.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.2.1...v3.2.2
[3.2.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.1.0...v3.2.1
[3.1.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.7...v3.1.0
[3.0.7]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.6...v3.0.7
[3.0.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.5...v3.0.6
[3.0.5]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.4...v3.0.5
[3.0.4]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.8...v3.0.0
[2.13.8]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.7...v2.13.8
[2.13.7]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.6...v2.13.7
[2.13.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.5...v2.13.6
[2.13.5]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.4...v2.13.5
[2.13.4]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.3...v2.13.4
[2.13.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.2...v2.13.3
[2.13.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.1...v2.13.2
[2.13.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.13.0...v2.13.1
[2.13.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.12.1...v2.13.0
[2.12.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.12.0...v2.12.1
[2.12.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.11.3...v2.12.0
[2.11.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.11.2...v2.11.3
[2.11.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.11.1...v2.11.2
[2.11.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.11.0...v2.11.1
[2.11.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.10.1...v2.11.0
[2.10.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.10.0...v2.10.1
[2.10.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.9.2...v2.10.0
[2.9.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.9.1...v2.9.2
[2.9.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.9.0...v2.9.1
[2.9.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.8.3...v2.9.0
[2.8.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.8.2...v2.8.3
[2.8.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.8.1...v2.8.2
[2.8.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.6...v2.7.0
[2.4.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.5...v2.4.6
[2.4.5]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.4...v2.4.5
[2.4.4]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.3...v2.4.4
[2.4.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.2...v2.4.3
[2.4.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.1...v2.4.2
[2.4.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.2.1...v2.4.0
[2.2.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.10...v2.1.0
[2.0.10]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.9...v2.0.10
[2.0.9]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.8...v2.0.9
[2.0.8]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.7...v2.0.8
[2.0.7]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.6...v2.0.7
[2.0.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.10...v2.0.5
[1.6.10]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.9...v1.6.10
[1.6.9]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.6...v1.6.9
[1.6.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.5...v1.6.6
[1.6.5]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.4...v1.6.5
[1.6.4]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.4.2...v1.5.0
[1.4.3]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.4.0...v1.4.2
[1.4.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.13...v1.1.0
[1.0.13]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.12...v1.0.13
[1.0.12]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.11...v1.0.12
[1.0.11]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.10...v1.0.11
[1.0.10]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.9-b...v1.0.10
[1.0.9-b]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.9-a...v1.0.9-b
[1.0.9]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.8...v1.0.9-a
[1.0.8]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/passbolt/passbolt_browser_extension/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/passbolt/passbolt_browser_extension/compare/1.0.4...v1.0.5
