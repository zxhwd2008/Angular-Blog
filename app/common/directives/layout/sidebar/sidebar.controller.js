(function() {
    'use strict';

    angular.module('app').controller('Sidebar', Sidebar);

    Sidebar.$inject = ['blogFactory'];

    function Sidebar(blogFactory) {
        var vm = this;
        vm.blogCategories = blogFactory.blogData.blogCategories;
        vm.category = null;
        vm.filterByCategory = filterByCategory;

        function filterByCategory(category) {
            vm.category = vm.category === category.cid ? null : category.cid;
            blogFactory.getBlogListsByCategory(vm.category);
        }
    }
}());