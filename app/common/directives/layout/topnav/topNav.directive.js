(function() {
    'use strict';

    angular.module('common').directive('topNav', topNav);

    topNav.$inject = [];

    function topNav() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/layout/topnav/topNav.directive.html'
        };
    }
}());