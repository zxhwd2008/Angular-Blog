describe('Controller: BlogList', function () {
    var scope, controller;

    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, $controller, blogFactory) {
        blogFactory.blogData = {
            blogLists: []
        };
        scope = $rootScope.$new();
        controller = $controller('BlogList',{$scope:scope}) ;
    }));

    it('should setup the blogLists' , inject(function(){
        expect(controller.blogLists).toBeDefined() ;
    }));
});