(function () {
    'use strict';

    angular.module('app').controller('BlogList', BlogList);

    BlogList.$inject = ['blogFactory', 'windowFactory'];

    function BlogList(blogFactory, windowFactory) {
        var vm = this;
        vm.blog = null;
        vm.blogLists = blogFactory.blogData.blogLists;
        vm.blogContentWindowOptions = generateWindowOptions();
        vm.category = null;
        vm.filterMode = 'all';
        vm.openBlog = openBlog;
        vm.goToAuthor = goToAuthor;

        function generateWindowOptions() {
            return windowFactory.extendWindow({
                content: 'app/blogList/blogContent.window.html',
                title: '',
                close: function () {
                    vm.blog = null;
                }
            });
        }

        function openBlog(window, blog) {
            vm.blog = blog;
            window.center().open();
        }

        function goToAuthor(window, blog) {
            window.close();
            
        }
    }
}());