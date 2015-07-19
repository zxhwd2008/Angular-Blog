(function() {
    'use strict';

    angular.module('app').factory('blogFactory', blogFactory);

    blogFactory.$inject = ['$http', '$q'];

    function blogFactory($http, $q) {
        var baseUrl = '/api/',
            blogFactoryObj = {
                blogData: {
                    blogCurrentCid: 0,
                    blogCurrentUid: 0,
                    blogLists: [],
                    blogUserLists: [],
                    blogCategories: []
                },
                getBlogLists: getBlogLists,
                getBlogListsByUser: getBlogListsByUser,
                getBlogListsByCategory: getBlogListsByCategory,
                getBlogCategories: getBlogCategories
            };

        return blogFactoryObj;

        function getBlogLists() {
            var deffered = $q.defer(),
                url = baseUrl + 'getBlogLists/' +
                    blogFactoryObj.blogData.blogCurrentCid + '/' +
                    blogFactoryObj.blogData.blogCurrentUid;
            $http.get(url)
                .then(function(response) {
                    angular.copy(response.data, blogFactoryObj.blogData.blogLists);
                    deffered.resolve(response.data);
            });

            return deffered.promise;
        }

        function getBlogListsByUser(uid) {
            blogFactoryObj.blogData.blogCurrentUid = uid || 0;
            return getBlogLists();
        }

        function getBlogListsByCategory(cid) {
            blogFactoryObj.blogData.blogCurrentCid = cid || 0;
            return getBlogLists();
        }


        function getBlogCategories() {
            var deffered = $q.defer();
            $http.get(baseUrl + 'getBlogCategories').then(function(response) {
                angular.copy(response.data, blogFactoryObj.blogData.blogCategories);
                deffered.resolve(response.data);
            });

            return deffered.promise;
        }
    }
}());