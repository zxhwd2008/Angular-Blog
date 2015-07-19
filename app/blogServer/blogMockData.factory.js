(function() {
    'use strict';

    angular.module('appDev').factory('blogMockDataFactory', blogMockDataFactory);

    blogMockDataFactory.$inject = [];

    function blogMockDataFactory() {
        return function() {
            return getMockData();
        };

        function getMockData() {
            //===========================================================//
            //id, uid, cid, title, image, text, username,    category    //
            //1 , 1  , 1  , title, image, text, 'Xiaohang' , 'Javascript'//
            //2 , 1  , 1  , title, image, text, 'Xiaohang' , 'Javascript'//
            //3 , 1  , 1  , title, image, text, 'Xiaohang' , 'Javascript'//
            //4 , 2  , 1  , title, image, text, 'Misko'    , 'Javascript'//
            //5 , 2  , 2  , title, image, text, 'Misko'    , 'Angular'   //
            //6 , 3  , 2  , title, image, text, 'John papa', 'Angular'   //
            //7 , 4  , 2  , title, image, text, 'David'    , 'Angular'   //
            //8 , 4  , 2  , title, image, text, 'Daivd'    , 'Angular'   //
            //9 , 5  , 3  , title, image, text, 'Brian'    , 'CSS'       //
            //10, 6  , 3  , title, image, text, 'Green'    , 'CSS'       //
            //===========================================================//
            return [
                {
                    id: 1,
                    uid: 1,
                    cid: 1,
                    title: "NewSprint, Spectacle",
                    image: "/content/js.png",
                    text: "AngularJS lets you write web applications as if you had a smarter browser.  " +
                    "It lets you extend HTML's syntax to express your application's components clearly and succinctly " +
                    "and lets use standard HTML as your template language.  " +
                    "And it automatically synchronizes data from your UI (view) with your JavaScript objects (model) " +
                    "through 2-way data binding.",
                    username: "Xiaohang",
                    category: "Javascript"
                },
                {
                    id: 2,
                    uid: 1,
                    cid: 1,
                    title: "Security Updates: Node 0.12 and io.js",
                    image: "/content/js.png",
                    text: "",
                    username: "Xiaohang",
                    category: "Javascript"
                },
                {
                    id: 3,
                    uid: 1,
                    cid: 1,
                    title: "npm: Scoped Package Metadata Leak",
                    image: "/content/js.png",
                    text: "",
                    username: "Xiaohang",
                    category: "Javascript"
                },
                {
                    id: 4,
                    uid: 2,
                    cid: 1,
                    title: "Small Modules: Tales from a Serial Module Author",
                    image: "/content/js.png",
                    text: "",
                    username: "Misko",
                    category: "Javascript"
                },
                {
                    id: 5,
                    uid: 2,
                    cid: 2,
                    title: "Angular 1.4.0 - jaracimrman-existence",
                    image: "/content/angular.png",
                    text: "",
                    username: "Misko",
                    category: "Angular"
                },
                {
                    id: 6,
                    uid: 3,
                    cid: 2,
                    title: "New Angular Releases - 1.3.15 and 1.4.0-beta.6",
                    image: "/content/angular.png",
                    text: "",
                    username: "John Papa",
                    category: "Angular"
                },
                {
                    id: 7,
                    uid: 4,
                    cid: 2,
                    title: "Announcements from ng-conf",
                    image: "/content/angular.png",
                    text: "",
                    username: "David",
                    category: "Angular"
                },
                {
                    id: 8,
                    uid: 4,
                    cid: 2,
                    title: "Angular CLA Infrastructure Changes",
                    image: "/content/angular.png",
                    text: "",
                    username: "David",
                    category: "Angular"
                },
                {
                    id: 9,
                    uid: 5,
                    cid: 3,
                    title: "jQuery 3.0 (alpha)",
                    image: "/content/css.png",
                    text: "",
                    username: "Brian",
                    category: "CSS"
                },
                {
                    id: 10,
                    uid: 6,
                    cid: 3,
                    title: "Print Stylesheet Approaches: Blacklist vs Whitelist",
                    image: "/content/css.png",
                    text: "",
                    username: "Green",
                    category: "CSS"
                }
            ];
        }
    }
}());