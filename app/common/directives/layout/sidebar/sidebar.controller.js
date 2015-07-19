(function() {
    'use strict';

    angular.module('app').controller('Sidebar', Sidebar);

    Sidebar.$inject = ['blogFactory'];

    function Sidebar(blogFactory) {
        var vm = this;
        vm.category = null;
        vm.blogCategories = blogFactory.blogData.blogCategories;
        vm.filterByCategory = filterByCategory;

        function filterByCategory(category) {
            vm.category = vm.category === category.cid ? null : category.cid;
            blogFactory.getBlogsByCategory(vm.category);
        }
    }
}());