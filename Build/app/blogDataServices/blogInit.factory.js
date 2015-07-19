(function () {
    'use strict';

    angular.module('app')
        .factory('blogInitFactory', blogInitFactory);

    blogInitFactory.$inject = [
        '$q',
        'blogFactory'
    ];

    function blogInitFactory(
        $q,
        blogFactory) {
        return {
            init: initBlogData
        };

        function initBlogData() {
            var deferred = $q.defer();
            $q.all([
                blogFactory.getBlogCategories(),
                blogFactory.getBlogLists()
            ]).then(function (results) {
                deferred.resolve({
                    blogCategories: results[0],
                    blogLists: results[1]
                });
            });
            return deferred.promise;
        }
    }
}());