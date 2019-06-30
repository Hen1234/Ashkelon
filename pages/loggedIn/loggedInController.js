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

            $scope.singlePOI1 = "There are no favorites";
        }
        else{

            console.log("1= "+response.data[0]['pointOfIntrest']);
            console.log("2= "+response.data[1]['pointOfIntrest']);
            myService.searchPOI(response.data[0]['pointOfIntrest'], $window).
            then(function(response){

                $scope.singlePOI1 = response.data[0]['IntrestName'];
                console.log("singlePOI1= "+ $scope.singlePOI1);
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


    $scope.changeData=function(x){
        $scope.Xname = x.IntrestName;
        $scope.Xdesc = x.IntrestDescription;
        $scope.XcountView = x.IntrestViewCounter;
        $scope.Xrank = x.calculatedRank+"%";

        
        //checkkkkkkkkkkkkkkkkkkk
        myService.getDetailsForReview($window, x.IntrestName)
        .then(function(response){
            //console.log("responseeeee"+x.IntrestName);
            //console.log("responseeeee"+alert(JSON.stringify(response.data[0], null, 4)));
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

    $scope.changeDataForSinglePOI = function(poiName){


        myService.searchPOI(poiName,$window)
        .then(function(response){

            $scope.Xname = response.data[0].IntrestName;
            $scope.Xdesc = response.data[0].IntrestDescription;
            $scope.XcountView = response.data[0].IntrestViewCounter;
            $scope.Xrank = response.data[0].calculatedRank+"%";
            myService.getDetailsForReview($window, poiName)
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

            }, function(response) {
                $scope.Xname = response.statusText;
        });

    }

    $scope.forFeed = function(x){

        $scope.interestNameForFeed = x.IntrestName;

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