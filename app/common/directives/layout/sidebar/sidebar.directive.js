(function() {
    'use strict';

    angular.module('common').directive('sidebar', sidebar);

    sidebar.$inject = [];

    function sidebar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/layout/sidebar/sidebar.directive.html'
        };
    }
}());