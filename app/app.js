(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        'ui.router',              // routing
        'angular-loading-bar',    // angular loading bar
        'kendo.directives',       // kendo directives

        // Custom modules
        'common'                  // common functions, logger, spinner
    ])
        .config(appConfig);

    angular.module('common', []);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('blog', {
                template: '<div ui-view></div>',
                resolve: {
                    blogPageData: blogPageData
                }
            })
            .state('blog.list', {
                url: '/blog',
                templateUrl: 'app/blog.index.html'
            });
        $urlRouterProvider.otherwise('/blog');

        blogPageData.$inject = ['blogInitFactory'];
        function blogPageData(blogInitFactory) {
            return blogInitFactory.init();
        }
    }
})();