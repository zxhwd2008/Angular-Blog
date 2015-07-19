(function () {
    'use strict';

    angular.module('appDev', [
        'app', 'ngMockE2E'
    ])
        .run(appDevConfig);

    appDevConfig.$inject = ['blogMockBackendFactory'];

    function appDevConfig(blogMockBackendFactory) {
        blogMockBackendFactory.activate();
    }
})();