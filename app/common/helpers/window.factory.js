(function () {
    'use strict';

    angular.module('common').factory('windowFactory', windowFactory);

    windowFactory.$inject = ['$window'];

    function windowFactory($window) {
        return {
            extendWindow: extendWindow
        };

        function extendWindow(options) {
            return angular.extend({
                actions: ['close'],
                iframe: false,
                resizable: false,
                draggable: true,
                pinned: true,
                modal: true,
                width: $window.innerWidth > 768 ? 500 : 300,
                height: $window.innerHeight < 600 ? 300 : 550,
                visible: false
            }, options || {});
        }
    }
}());