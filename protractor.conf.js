exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'test/e2e/**/*.js'
  ],
         
  capabilities: {
    'browserName': 'chrome'
  },

  //baseUrl: 'http://localhost:8000/app/',
  
  baseUrl: 'http://localhost:3000/',
  
  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
