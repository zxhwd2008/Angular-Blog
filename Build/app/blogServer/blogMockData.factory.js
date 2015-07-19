(function() {
    "use strict";

    angular.module("appDev").factory("blogMockDataFactory", blogMockDataFactory);

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
                    text: "Today we are announcing the 1.0 release of AngularJS.  We’d like to thank our early adopters, " +
                    "and we’re excited to share it with you who haven’t yet experienced it. \n" +
                    "Our goal with AngularJS is to eliminate the guesswork in creating web app structure and take the " +
                    "pain and the boilerplate out of web client apps.  We think we’re there and we’d love for you to " +
                    "take a look.",
                    username: "Xiaohang",
                    category: "Javascript"
                },
                {
                    id: 3,
                    uid: 1,
                    cid: 1,
                    title: "npm: Scoped Package Metadata Leak",
                    image: "/content/js.png",
                    text: "I use Trello for project management, and for a while I archived each week (or sprint) into " +
                    "a list so it was easy for management to see what we've completed recently. " +
                    "This process could be automated with NewSprint, by sending an email with card summaries. " +
                    "The emails look very nice, and I like the fact it uses a command-line tool with JSON files for " +
                    "configuration.",
                    username: "Xiaohang",
                    category: "Javascript"
                },
                {
                    id: 4,
                    uid: 2,
                    cid: 1,
                    title: "Small Modules: Tales from a Serial Module Author",
                    image: "/content/js.png",
                    text: "With Spectacle you can write slides with JSX. It supports tags like, and " +
                    "there are even layout tags for making text appear in the right place without too much fiddling " +
                    "about with CSS. Here's a very basic example of a slide:",
                    username: "Misko",
                    category: "Javascript"
                },
                {
                    id: 5,
                    uid: 2,
                    cid: 2,
                    title: "Angular 1.4.0 - jaracimrman-existence",
                    image: "/content/angular.png",
                    text: "Kris Reeves and Trevor Norris pinpointed a bug in V8 in the way it decodes UTF strings. " +
                    "This impacts Node at the Buffer to UTF8 String conversion and can cause a process to crash. " +
                    "The security concern comes from the fact that a lot of data from outside of an application " +
                    "is delivered to Node via this mechanism which means that users can potentially deliver " +
                    "specially crafted input data that can cause an application to crash when it goes through this " +
                    "path. We know that most networking and filesystem operations are impacted as would be many " +
                    "user-land uses of Buffer to UTF8 String conversion. We know that HTTP(S) header parsing is " +
                    "not vulnerable because Node does not convert this data as UTF8. This is a small consolation " +
                    "because it restricts the way HTTP(S) can be exploited but there is more to HTTP(S) than " +
                    "header parsing obviously. We also have no information yet on how the various TLS terminators and " +
                    "forward-proxies in use may potentially mitigate against the form of data " +
                    "required for this exploit.",
                    username: "Misko",
                    category: "Angular"
                },
                {
                    id: 6,
                    uid: 3,
                    cid: 2,
                    title: "New Angular Releases - 1.3.15 and 1.4.0-beta.6",
                    image: "/content/angular.png",
                    text: "It's important to make clear that this does not include the packages themselves: package " +
                    "contents and source code were never available. User information such as passwords and billing " +
                    "information was not part of the information that leaked.",
                    username: "John Papa",
                    category: "Angular"
                },
                {
                    id: 7,
                    uid: 4,
                    cid: 2,
                    title: "Announcements from ng-conf",
                    image: "/content/angular.png",
                    text: "If your package metadata contained sensitive information, please take mitigation steps " +
                    "immediately. Because this information replicated, we will be making a public disclosure of " +
                    "the leak. However, to give you time to react (we are aware that it is a holiday weekend in the US) " +
                    "we will be holding off on the public announcement until Monday, July 6th.",
                    username: "David",
                    category: "Angular"
                },
                {
                    id: 8,
                    uid: 4,
                    cid: 2,
                    title: "Angular CLA Infrastructure Changes",
                    image: "/content/angular.png",
                    text: "We apologize wholeheartedly for this mistake and have taken steps to prevent this error. " +
                    "We are conducting a thorough review of our processes to avoid both this specific problem and " +
                    "any similar errors in the future.",
                    username: "David",
                    category: "Angular"
                },
                {
                    id: 9,
                    uid: 5,
                    cid: 3,
                    title: "jQuery 3.0 (alpha)",
                    image: "/content/css.png",
                    text: "Check your readme files and package names to ensure nothing sensitive has been leaked. " +
                    "This is unfortunate, but npm is handling it promptly and professionally. " +
                    "With any service you rely on for commercial work, like GitHub, Bitbucket, npm, and CDNs, " +
                    "you should review what you publish before it's stored on remote systems.",
                    username: "Brian",
                    category: "CSS"
                },
                {
                    id: 10,
                    uid: 6,
                    cid: 3,
                    title: "Print Stylesheet Approaches: Blacklist vs Whitelist",
                    image: "/content/css.png",
                    text: "People get way too easily caught up in the LOC (Lines Of Code) argument. " +
                    "LOC is pretty much irrelevant. It doesn't matter if the module is one line or hundreds. " +
                    "It's all about containing complexity. Think of node modules as lego blocks. " +
                    "You don't necessarily care about the details of how it's made. All you need to know is how to " +
                    "use the lego blocks to build your lego castle.",
                    username: "Green",
                    category: "CSS"
                }
            ];
        }
    }
}());