(function() {
    'use strict';

    angular.module('app').controller('Sidebar', Sidebar);

    Sidebar.$inject = ['blogFactory'];

    function Sidebar(blogFactory) {
        var vm = this;
        vm.blogCategories = blogFactory.blogData.blogCategories;
    }
}());