//poi controller
angular.module("myApp")
.controller("poiController", function ($scope, myService, $window) {


    myService.getPOIbyCat($window)
    .then(function (response) {
        $scope.records = response.data;
    }, function(response) {
        $scope.records = response.statusText;
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

