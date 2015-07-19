(function() {
    'use strict';

    angular.module('common').directive('blogFooter', footer);

    footer.$inject = [];

    function footer() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/layout/footer/footer.directive.html'
        };
    }
}());