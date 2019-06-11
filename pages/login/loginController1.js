// angular.module("myApp")
// .controller("loginController1", function ($scope, $http) {
    
//     //var $ctrl = this;
    
//     // $scope.submit = function(){
//     //     $scope.answer = "Submitted! you entered: " + $scope.uname
//     // };

//     // $ctrl.$onInit = function() {
//         $http({
//             // method: 'GET',
//             // url: 'http://localhost:3000/Users/select'
//             method:'POST',
//             url: 'http://localhost:3000/Users/login',
//             data: {
//                 // username: "hen2",
//                 // password: "123"
//                 "username": "hen2",
//                 "password":"123"
//             }


//         }).then(function (response) {
//             $scope.records = response.data;
//             console.log(response.data);
//         }, function(response) {
//             $scope.records = response.statusText;
//         });
//     //}
// });

// login controller
angular.module("myApp")
.controller("loginController1", function ($scope, $http) {
    $scope.submit = function(){
        var username = uname.value;
        console.log(username);
        var pass = password.value;
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
      //  $scope.answer = "Submitted! you entered: " + $scope.uname
    };

    

});

// poi controller
// angular.module("myApp")
// .controller("loginController1", function ($scope) {
//     self = this;
//     self.cities = {
//         1: {name:"Paris", state: "France", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg"},
//         2: {name:"Jerusalem", state: "Israel", image: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg"},
//         3: {name:"London", state: "England", image: "http://www.ukguide.co.il/Photos/England/London/British-Royal-Tour.jpg"}
//     }
// });