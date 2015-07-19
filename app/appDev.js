(function () {
    'use strict';

    angular.module('appDev', [
        'app', 'ngMockE2E'
    ])
        .config(appDevConfig)
        .run(appDevRun);

    appDevRun.$inject = ['blogMockBackendFactory'];
    function appDevRun(blogMockBackendFactory) {
        blogMockBackendFactory.activate();
    }

    appDevConfig.$inject = ['$provide'];
    function appDevConfig($provide) {
        $provide.decorator('$httpBackend', delayBackend);
        delayBackend.$inject = ['$delegate'];
        function delayBackend($delegate) {
            var proxy = function(method, url, data, callback, headers) {
                var interceptor = function() {
                    var _this = this,
                        _arguments = arguments;
                    setTimeout(function() {
                        callback.apply(_this, _arguments);
                    }, 200);
                };
                return $delegate.call(this, method, url, data, interceptor, headers);
            };
            for(var key in $delegate) {
                if ($delegate.hasOwnProperty(key)) {
                    proxy[key] = $delegate[key];
                }
            }
            return proxy;
        }
    }
})();