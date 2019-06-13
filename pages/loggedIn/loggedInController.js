angular.module("myApp")
.controller("loggedInController", function ($scope, myService, $window) {

    // '#!register'.hide();
    myService.recommendedPOI($window).then(function(response){
      
    $scope.records = response.data;
    }, function(response) {
        $scope.records = response.statusText;
    });

    myService.twoLastFavorites($window).then(function(response){
        
        $scope.records2 = response.data;
     
    }, function(response) {
       
            $scope.records2 = response.statusText;
    });




})