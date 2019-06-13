angular.module("myApp")
.controller("favoritesController", function ($scope, myService, $window, $http) {

    myService.getFavorites($window).then(function(response){
        
        if(response.dat!= null){
            $scope.records = response.data;
            console.log("records="+$scope.records);
        
        //the user has no favorites
        }else{
            // $scope.sort.hide();
            // $scope.sortRank.hide();
            $scope.message = 'There are no favorites';

        }

    
    
        
        }, function(response) {
            $scope.records = response.statusText;
        });

    $scope.sortByCat= function(){

            myService.sortFavoritesByCat($window)
            .then(function(response){
                console.log("records="+$scope.records);
                $scope.records = response.data;
        
                
                }, function(response) {
                    $scope.records = response.statusText;
                });
        
       
        }



    $scope.sortByRank= function(){

        myService.sortFavoritesByRank($window)
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });
    
   
    }

})

 


