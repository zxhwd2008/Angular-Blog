describe('Controller: BlogAuthor', function() {
    var scope, controller, stateParams;

    beforeEach(module('appDev'));

    beforeEach(inject(function ($rootScope, $controller, blogFactory) {
        scope = $rootScope.$new();
        stateParams = {
            uid: 1,
            username: 'Xiaohang'
        };
        controller = $controller('BlogAuthor',{$scope:scope, $stateParams: stateParams});
        spyOn(blogFactory, 'getBlogListsByCategory').and.callThrough();
        spyOn(blogFactory, 'getBlogListsByUser').and.callThrough();
    }));

    it('should set up username from the $stateParams parameters' , inject(function(){
        expect(controller.username).toBe('Xiaohang');
    }));

    it('should direct back to the blog lists when user clicks home', inject(function(blogFactory){
        controller.goToHome();
        expect(blogFactory.getBlogListsByCategory).toHaveBeenCalledWith(0);
    }));
});