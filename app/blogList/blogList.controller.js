(function () {
    'use strict';

    angular.module('app').controller('BlogList', BlogList);

    BlogList.$inject = ['blogFactory'];

    function BlogList(blogFactory) {
        var vm = this;
        vm.blogLists = blogFactory.blogData.blogLists;
    }
}());