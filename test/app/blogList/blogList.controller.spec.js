describe('Controller: BlogList', function () {
    var scope, controller, window;

    beforeEach(module('appDev'));
    beforeEach(inject(function ($rootScope, $controller, blogFactory, blogMockDataFactory) {
        blogFactory.blogData = {
            blogLists: blogMockDataFactory()
        };
        scope = $rootScope.$new();
        window = {
            center: function() {
                return this;
            },
            open: function() {
                return this;
            },
            close: function() {

            }
        };
        spyOn(window, 'center').and.callThrough();
        spyOn(window, 'open').and.callThrough();
        spyOn(window, 'close').and.callThrough();
        controller = $controller('BlogList',{$scope:scope}) ;
    }));

    it('should set up the blogLists' , inject(function(){
        expect(controller.blogLists[0].title).toBe('NewSprint, Spectacle');
        expect(controller.blogLists.length).toBe(10);
    }));

    it('should set up the kendo window widget', inject(function() {
        expect(controller.blogContentWindowOptions.content).toBe('app/blogList/blogContent.window.html');
    }));

    it('should open the blog window and show the content', inject(function() {
        controller.openBlog(window);
        expect(window.center().open).toHaveBeenCalled();
    }));

    it('should direct to the author page when user clicks the username', inject(function($state, blogFactory) {
        spyOn($state, 'go').and.callThrough();
        controller.goToAuthor(window, blogFactory.blogData.blogLists[0]);
        expect($state.go).toHaveBeenCalledWith("blog.list.author", {uid: 1, username: "Xiaohang"});
    }));
});