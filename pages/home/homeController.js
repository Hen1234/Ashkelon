
angular.module("myApp")
.controller("homeController", function ($scope, $http, myService, $window) {
  

       
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


    

});
