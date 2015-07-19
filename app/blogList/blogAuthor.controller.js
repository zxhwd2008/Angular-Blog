(function () {
    'use strict';

    angular.module('app').controller('BlogAuthor', BlogAuthor);

    BlogAuthor.$inject = ['$state', '$stateParams', 'blogFactory'];

    function BlogAuthor($state, $stateParams, blogFactory) {
        var vm = this;
        vm.goToHome = goToHome;
        vm.username = $stateParams.username;

        blogFactory.getBlogListsByUser($stateParams.uid);

        function goToHome() {
            blogFactory.blogData.blogCurrentUid = 0;
            blogFactory.getBlogListsByCategory(blogFactory.blogData.blogCurrentCid).then(function () {
                $state.go('blog.list');
            });
        }
    }
}());