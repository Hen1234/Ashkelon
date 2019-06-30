angular.module("myApp")
.controller("favoritesController", function ($scope, myService, $window, $http, $location) {
/*fields of x to show in modal*/
// $scope.Xname = "hh";
// $scope.Xdesc = "hh";

myService.getFavorites($window).then(function(response){
        
        
    if(response.data!= "No such a user" ){
        $scope.records = response.data;
       
    
    //the user has no favorites
    }else{
      
        $scope.records = "";
        $scope.message = 'There are no favorites';

    }

    }, function(response) {
        $scope.records = response.statusText;
    });

    $scope.changeData=function(x){
        $scope.Xname = x.IntrestName;
        $scope.Xdesc = x.IntrestDescription;
        $scope.XcountView = x.IntrestViewCounter;
        $scope.Xrank = x.calculatedRank+"%";

        

        
        //checkkkkkkkkkkkkkkkkkkk
        myService.getDetailsForReview($window, x.IntrestName)
        .then(function(response){
            //console.log("responseeeee"+response.data[0]['reviewDescription']);
            //console.log("second= "+response.data[1]['reviewDescription']);
            if(response.data[0]['reviewDescription'] == null){
                $scope.Xreview = "no reviews";
            }else{
                $scope.Xreview = "\'"+response.data[0]['reviewDescription']+"\', "+response.data[0]['date']+"\n";
                if(response.data[1] !=null){
                    $scope.Xreview = "\'"+response.data[0]['reviewDescription']+"\', "+response.data[0]['date']+"\n"+
                    "\'"+response.data[1]['reviewDescription']+"\', "+response.data[1]['date'];
                }
               
            }
             
           //console.log("responseeeee"+alert(JSON.stringify(response.data[0], null, 4)));
    
            
            }, function(response) {
                $scope.Xreview = response.statusText;
            });

    }


    $scope.sortByCat= function(){

            myService.sortFavoritesByCat($window)
            .then(function(response){
                images.style.display = 'none';
           
                if(response.data!= "No such a user" ){
                    $scope.rankRecords = response.data;
                   
                
                //the user has no favorites
                }else{
                  
                    $scope.rankRecords = "";
                    $scope.message = 'There are no favorites';
            
                }
        
                
                }, function(response) {
                    $scope.records = response.statusText;
                });
        
       
        }


    $scope.sortByRank= function(){


        myService.sortFavoritesByRank($window)
        .then(function(response){
            // console.log("records="+$scope.records);
            images.style.display = 'none';
           
            if(response.data!= "No such a user" ){
                $scope.rankRecords = response.data;
               
            
            //the user has no favorites
            }else{
              
                $scope.rankRecords = "";
                $scope.message = 'There are no favorites';
        
            }
         
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });
    
   
    }

    $scope.removeFromFavorites = function(interestName){

        console.log("scubar= "+interestName );
        myService.removeFromFavoritesList($window,interestName )
        .then(function(response){
           
            myService.getFavorites($window).then(function(response){
        
                if(response.data!= "No such a user" ){
                    $scope.records = response.data;
                   
                //the user has no favorites
                }else{
                  
                    $scope.records = "";
                    $scope.message = 'There are no favorites';
        
                }
        
                $location.url('/favorites');

                }, function(response) {
                    $scope.records = response.statusText;
                });
           

    
            
        }, function(response) {
                $scope.records = response.statusText;
        });

    }

    $scope.forFeed = function(x){

        $scope.interestNameForFeed = x.IntrestName;
        rank.value = "";
        reviewFromUser.value = "";



    }

    $scope.createFeedback = function(interestNameForFeed){

        var rankNum = rank.value;
        var description = reviewFromUser.value;
        // console.log("scope.= "+$scope.x.IntrestName);
        myService.createFeed(interestNameForFeed, rankNum,description, $window).
        then(function(response){


        }, function(response) {
                $scope.records = response.statusText;
        });
    }




})

 


