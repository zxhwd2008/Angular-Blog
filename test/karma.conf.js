// Karma configuration
// Generated on Fri Oct 10 2014 11:02:45 GMT+0300 (FLE Daylight Time)

module.exports = function (config) {
    'use strict';
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // app libs
            'lib/bower_components/jquery/jquery.js',
            'lib/bower_components/angular/angular.js',
            'lib/bower_components/angular-ui-router/release/angular-ui-router.js',
            'lib/bower_components/angular-loading-bar/build/loading-bar.js',
            'lib/bower_components/bootstrap/dist/js/bootstrap.js',
            'lib/bower_components/kendo-ui-core/js/kendo.ui.core.min.js',
            'lib/bower_components/underscore/underscore.js',
            // test lib
            'lib/bower_components/angular-mocks/angular-mocks.js',
            // app files
            'app/app.js',
            'app/appDev.js',
            'app/**/*.js',
            'test/app/**/*.js'
        ],

        // list of files to exclude
        exclude: [],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};