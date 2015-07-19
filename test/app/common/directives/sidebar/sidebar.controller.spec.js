describe('Controller: Sidebar', function() {
    var scope, controller;

    beforeEach(module('appDev'));

    beforeEach(inject(function ($rootScope, $controller, blogFactory) {
        scope = $rootScope.$new();
        controller = $controller('Sidebar',{$scope:scope});
        blogFactory.blogData= {
            blogCategories: [{cid: 1, category: 'Javascript'}, {cid: 2, category: 'Angular'}]
        };
        spyOn(blogFactory, 'getBlogListsByCategory').and.callThrough();
    }));

    it('should set the category when user change from the sidebar', inject(function() {
        controller.filterByCategory({cid: 1, category: 'Javascript'});
        expect(controller.category).toBe(1);
    }));

    it('should fetch blog list based on category when user change from the sidebar', inject(function(blogFactory) {
        controller.filterByCategory({cid: 1, category: 'Javascript'});
        expect(blogFactory.getBlogListsByCategory).toHaveBeenCalledWith(1);
    }));
});