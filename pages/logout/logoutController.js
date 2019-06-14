angular.module("myApp")
.controller("logoutController", function ($scope, myService, $window, $location) {

    $location.url('/home');
    menuForGuest.style.display = 'block';
    menuForUser.style.display = 'none';

})