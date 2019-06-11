angular.module("myApp")
.controller("registerController", function ($scope, $http) {

 
    $http({
        method: 'GET',
        url: 'http://localhost:3000/Users/GetCategories'
    }).then(function (response) {

        $scope.options = response.data;
    }, function(response) {
        $scope.records = response.statusText;
    });

    $scope.submit = function(){
        var username = uname.value;
        console.log(username);
        var pass = password.value;

        var interest1= selectId.value;
       
        console.log(pass);
        $http({
                        // method: 'GET',
                        // url: 'http://localhost:3000/Users/select'
                        method:'POST',
                        url: 'http://localhost:3000/Users/login',
                        data: {
                            // username: "hen2",
                            // password: "123"
                            "username": username,
                            "password":pass
                        }           
                    }).then(function (response) {
                        $scope.records = response.data;
                        console.log(response.data);
                    }, function(response) {
                        $scope.records = response.statusText;
                    });
        $scope.regexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


      //  $scope.answer = "Submitted! you entered: " + $scope.uname
    };




})