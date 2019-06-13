//poi controller
angular.module("myApp")
.controller("poiController", function ($scope, myService, $window) {


    myService.getPOIbyCatSport($window)
    .then(function(response){
        console.log("records="+$scope.records);
        $scope.sportRecords = response.data;

        
        }, function(response) {
            $scope.sportRecords = response.statusText;
        });
   

    myService.getPOIbyCatShopping($window)
    .then(function(response){
        console.log("records="+$scope.records);
        $scope.shoppingRecords = response.data;

        
        }, function(response) {
            $scope.shoppingRecords = response.statusText;
    });

    myService.getPOIbyCatRestaurant($window)
    .then(function(response){
        console.log("records="+$scope.records);
        $scope.restaurantRecords = response.data;

        
        }, function(response) {
            $scope.restaurantRecords = response.statusText;
    });

    myService.getPOIbyCatFood($window)
    .then(function(response){
        console.log("records="+$scope.records);
        $scope.foodRecords = response.data;

        
        }, function(response) {
            $scope.foodRecords = response.statusText;
    });



    $scope.sortPOIbyRank= function(){

        myService.sortPOIbyRank($window)
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });
    
   
    }




})

