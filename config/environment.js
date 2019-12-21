'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'emtasks',
    environment,
    contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyAgELl2rGx8IfMwF-jWUzTdMcHa_t8eE04",
      authDomain: "emberjs-70462.firebaseapp.com",
      databaseURL: "https://emberjs-70462.firebaseio.com",
      projectId: "emberjs-70462",
      storageBucket: "emberjs-70462.appspot.com",
      messagingSenderId: "153804085682",
      appId: "1:153804085682:web:77ff2352bf15b580312cab"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
