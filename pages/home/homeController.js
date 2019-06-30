
angular.module("myApp")
.controller("homeController", function ($scope, $http, myService, $window, $rootScope) {
//     if( $rootScope.loginFlag == 'false' ||  $rootScope.loginFlag == undefined)
//     $rootScope.loginFlag = 'false';
// else  $rootScope.loginFlag = 'true';
//console.log("app.controller loginFlag : " + $rootScope.loginFlag)
        myService.getThreeRandom($window).then(function(response){

            $scope.records = response.data;
        

        }, function(error) {
            $scope.records = error.statusText;
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


    

});
