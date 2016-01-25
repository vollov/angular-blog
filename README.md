# angular-blog
angular JS blogger, a demo app to show how to test angular application

### Install Dependencies
npm install

You should find that you have two new folders in your project.

* node_modules - contains the npm packages for the tools we need
* app/bower_components - contains the angular framework files


## Testing
### Running Unit Tests

* the configuration is found at karma.conf.js
* the unit tests are found next to the code they are testing and are named as xxx_test.js.

npm test
npm run test-single-run

### End to end testing

* the configuration is found at e2e-tests/protractor-conf.js
* the end-to-end tests are found in e2e-tests/scenarios.js

npm start
npm run update-webdriver
npm run protractor

