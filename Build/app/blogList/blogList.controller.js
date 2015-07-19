(function () {
    'use strict';

    angular.module('app').controller('BlogList', BlogList);

    BlogList.$inject = ['$state', 'blogFactory', 'windowFactory'];

    function BlogList($state, blogFactory, windowFactory) {
        var vm = this;
        vm.blog = null;
        vm.blogLists = blogFactory.blogData.blogLists;
        vm.blogContentWindowOptions = generateWindowOptions();
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
            $state.go('blog.list.author', {uid:blog.uid, username:blog.username});
        }
    }
}());