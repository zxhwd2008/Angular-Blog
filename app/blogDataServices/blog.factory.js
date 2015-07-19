(function() {
    'use strict';

    angular.module('app').factory('blogFactory', blogFactory);

    blogFactory.$inject = ['$http', '$q'];

    function blogFactory($http, $q) {
        var baseUrl = '/api/',
            blogFactory = {
                blogData: {
                    blogCurrentCid: 0,
                    blogLists: [],
                    blogCategories: []
                },
                getBlogLists: getBlogLists,
                getBlogListsByUser: getBlogListsByUser,
                getBlogListsByCategory: getBlogListsByCategory,
                getBlogCategories: getBlogCategories
            };

        return blogFactory;

        function getBlogLists() {
            var deffered = $q.defer();
            $http.get(baseUrl + 'getBlogLists/' + blogFactory.blogData.blogCurrentCid).then(function(response) {
                angular.copy(response.data, blogFactory.blogData.blogLists);
                deffered.resolve(response.data);
            });

            return deffered.promise;
        }

        function getBlogListsByUser() {

        }

        function getBlogListsByCategory(cid) {
            blogFactory.blogData.blogCurrentCid = cid ? cid : 0;
            getBlogLists();
        }


        function getBlogCategories() {
            var deffered = $q.defer();
            $http.get(baseUrl + 'getBlogCategories').then(function(response) {
                angular.copy(response.data, blogFactory.blogData.blogCategories);
                deffered.resolve(response.data);
            });

            return deffered.promise;
        }
    }
}());