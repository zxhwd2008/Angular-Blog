module.exports = {
    // Outputs the libs.js file (common fol all pages)
    // All these libraries are supplied by vendors
    libs: {
        src: [
            '<%= globalConfig.bower %>/jquery/jquery.js',
            '<%= globalConfig.bower %>/angular/angular.js',
            '<%= globalConfig.bower %>/angular-mocks/angular-mocks.js',
            '<%= globalConfig.bower %>/angular-ui-router/release/angular-ui-router.js',
            '<%= globalConfig.bower %>/angular-loading-bar/build/loading-bar.js',
            '<%= globalConfig.bower %>/bootstrap/dist/js/bootstrap.js',
            '<%= globalConfig.bower %>/underscore/underscore.js'
        ],
        dest: '<%= globalConfig.dest %>/<%= globalConfig.pkgname %>.libs.js'
    },

    // The app
    app: {
        src: [
            '<%= globalConfig.src %>/app.js',
            '<%= globalConfig.src %>/appDev.js',
            '<%= globalConfig.src %>/**/*.js'
        ],
        dest: '<%= globalConfig.dest %>/<%= globalConfig.pkgname %>.app.js'
    },

    minifiedLibsWithKendo: {
        src: [
            '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.libs.min.js',
            '<%= globalConfig.bower %>/kendo-ui-core/js/kendo.ui.core.min.js'
        ],
        dest: '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.libs.min.js'
    }
};