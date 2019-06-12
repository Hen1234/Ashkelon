
// login controller
angular.module("myApp")
.controller("loginController", function ($scope, $window, myService) {
    var username = uname.value;
    console.log(username);
    var pass = password.value;
    console.log(pass);
    let key = 'token';

    $scope.submit = function(){

      
        
        myService.login(username,pass).then(function(response){
            $scope.records = response.data;
            $window.sessionStorage.setItem(key,response.data); 
            console.log("tokennn= "+$window.sessionStorage.getItem(key));
        
        }, function(response) {
            $scope.records = response.statusText;
        });


        // $http({
        //                 // method: 'GET',
        //                 // url: 'http://localhost:3000/Users/select'
        //                 method:'POST',
        //                 url: 'http://localhost:3000/Users/login',
        //                 data: {
        //                     // username: "hen2",
        //                     // password: "123"
        //                     "username": username,
        //                     "password":pass
        //                 }           
        //             }).then(function (response) {
        //                 $scope.records = response.data;
                     
        //                 $window.sessionStorage.setItem(key,response.data); 
        //                 console.log("tokennn= "+$window.sessionStorage.getItem(key));
        //             }, function(response) {
        //                 $scope.records = response.statusText;
        //             });
                   
        //     $http({

        //         method:'GET',
        //         url: 'http://localhost:3000/POI/private/getTwoMostPOIForUserbyInterest',
        //         headers: {
        //             'x-auth-token': $window.sessionStorage.getItem(key)
        //         }
              
        //     }).then(function (response) {
        //         $scope.records = response.data;
        //     }, function(response) {
        //         $scope.records = response.statusText;
                     
        //     })



    };

    $scope.retrievePassFunc = function(){
        
        var username1 = uname.value;
        myService.retrievePass(username1).then(function(response){
            $scope.verifyQuestion = response.data;

        }, function(response) {
            $scope.verifyQuestion = response.statusText;
        });

    }  

});
