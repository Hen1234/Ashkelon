let app = angular.module('myApp', ["ngRoute"]);

// config routes
app.config(function($routeProvider)  {
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            templateUrl: 'pages/home/home.html',
            controller : 'homeController as homeCtrl'
        })
        //homeFromMenu
        .when('/home', {
            // this is a template
            templateUrl: 'pages/home/home.html',
            controller : 'homeController as homeCtrl'
        })
        // about
        .when('/about', {
            // this is a template url
            templateUrl: 'pages/about/about.html',
            controller : 'aboutController as abtCtrl'
        })
        // poi
        .when('/poi', {
            templateUrl: 'pages/poi/poi.html',
            controller : 'poiController as poiCtrl'
        })
        // .when('/httpRequest', {
        //     templateUrl: 'pages/http/request.html',
        //     controller : 'httpController as httpCtrl'
        // })

        .when('/login', {
            templateUrl: 'pages/login/login.html',
            controller : 'loginController as loginCtrl'
        })

        .when('/register', {
            templateUrl: 'pages/register/register.html',
            controller : 'registerController as regCtrl'
        })
        .when('/loggedIn', {
            templateUrl: 'pages/loggedIn/loggedIn.html',
            controller : 'loggedInController as logeedInCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });
});