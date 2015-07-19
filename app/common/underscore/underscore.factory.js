(function () {
    'use strict';

    angular.module('common').factory('_', _);

    _.$inject = ['$window'];

    function _($window) {
        return $window._;
    }
}());