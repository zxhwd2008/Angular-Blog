(function() {
    'use strict';

    angular.module('appDev').factory('blogMockBackendFactory', blogMockBackendFactory);

    blogMockBackendFactory.$inject = ['$httpBackend', 'blogMockDataFactory', '_'];

    function blogMockBackendFactory($httpBackend, blogMockDataFactory, _) {
        var blogMockData = blogMockDataFactory();
        return {
            activate: activate
        };

        function activate() {
            $httpBackend.whenGET(/app\/.*/).passThrough();
            getBlogLists();
            getBlogCategories();

            function getBlogLists() {
                $httpBackend.whenGET(/\/api\/getBlogLists\/\w+\/\w+/).respond(function (method, url) {
                    var filteredBlogLists = [],
                        re = /.*\/api\/getBlogLists\/(\w+)\/(\w+)/,
                        cid = parseInt(url.replace(re, '$1'), 10),
                        uid = parseInt(url.replace(re, '$2'), 10);
                    _.each(blogMockData, function(blog) {
                        switch(cid) {
                            case 0:
                                if (!uid) {
                                    // cid & uid = 0, push everything
                                    filteredBlogLists.push(blog);
                                }
                                else if (blog.uid === uid) {
                                    // cid = 0 AND uid != 0, push if uid equal with the parameter
                                    filteredBlogLists.push(blog);
                                }
                                break;
                            default:
                                if (blog.cid === cid) {
                                    // cid != 0, compare the cid with the parameter
                                    if (!uid) {
                                        // cid & uid = 0, push everything
                                        filteredBlogLists.push(blog);
                                    }
                                    else if (blog.uid === uid) {
                                        // cid = 0 AND uid != 0, push if uid equal with the parameter
                                        filteredBlogLists.push(blog);
                                    }
                                }
                        }
                    });
                    return [200, filteredBlogLists];
                });
            }

            function getBlogCategories() {
                var categories = [], cids = [];
                _.each(blogMockData, function(blog) {
                    if (_.indexOf(cids, blog.cid) === -1) {
                        cids.push(blog.cid);
                        categories.push({
                            cid: blog.cid,
                            category: blog.category
                        });
                    }
                });
                $httpBackend.whenGET('/api/getBlogCategories').respond(categories);
            }

        }
    }
}());