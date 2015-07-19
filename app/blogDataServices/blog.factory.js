(function() {
    'use strict';

    angular.module('app').factory('blogFactory', blogFactory);

    blogFactory.$inject = ['$http', '$q'];

    function blogFactory($http, $q) {
        var baseUrl = '/api/',
            blogLists = [],
            blogFactory = {
                blogData: {
                    blogLists: [],
                    blogCategories: []
                },
                getBlogLists: getBlogLists,
                getBlogsByUser: getBlogsByUser,
                getBlogsByCategory: getBlogsByCategory,
                getBlogCategories: getBlogCategories
            };

        return blogFactory;

        function getBlogLists() {
            var deffered = $q.defer();
            $http.get(baseUrl + 'getBlogLists').then(function(response) {
                blogLists = response.data;
                angular.copy(response.data, blogFactory.blogData.blogLists);
                deffered.resolve(response.data);
            });

            return deffered.promise;
        }

        function getBlogsByUser(uid) {

        }

        function getBlogsByCategory(cid) {
            var filteredBlogLists = [];
            _.each(blogLists, function(blog) {
                if (blog.cid === cid) {
                    filteredBlogLists.push(blog);
                }
            });
            angular.copy(cid ? filteredBlogLists : blogLists, blogFactory.blogData.blogLists);
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