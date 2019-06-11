angular.module("myApp")
.controller("registerController", function ($scope, $http) {

   var value11 = value1.value;
    $http({
        method: 'GET',
        url: 'http://localhost:3000/Users/GetCategories'
    }).then(function (response) {

        $scope.records = response.data;
        value11= response.data;
    }, function(response) {
        $scope.records = response.statusText;
    });


})