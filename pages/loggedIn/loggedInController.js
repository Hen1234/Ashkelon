angular.module("myApp")
.controller("loggedInController", function ($scope, myService, $window) {

    // '#!register'.hide();
    myService.recommendedPOI($window).then(function(response){
      
    $scope.records = response.data;
    }, function(response) {
        $scope.records = response.statusText;
    });

    myService.twoLastFavorites($window).then(function(response){
        
        if(response.data[0]['pointOfIntrest']==null){

            $scope.records2 = "There are no favorites";
        }
        else{

            console.log("2= "+response.data[0]['pointOfIntrest']);
            myService.searchPOI(response.data[0]['pointOfIntrest'], $window).
            then(function(response){

                $scope.singlePOI1 = response.data[0]['IntrestName'];
                $scope.IntrestPicture1 = response.data[0]['IntrestPicture'];

            }, function(response) {
       
                $scope.singlePOI1 = response.statusText;
            });    

            if(!(response.data[1]['pointOfIntrest']== null)){

                myService.searchPOI(response.data[1]['pointOfIntrest'], $window).
                then(function(response){
    
                    $scope.singlePOI2 = response.data[0]['IntrestName'];
                    $scope.IntrestPicture2 = response.data[0]['IntrestPicture'];
    
                }, function(response) {
           
                    $scope.singlePOI2 = response.statusText;                
                });
                   
                
            }
        

        }
     
     
    }, function(response) {
       
            $scope.records2 = response.statusText;
    });




})