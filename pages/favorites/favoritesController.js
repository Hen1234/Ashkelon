angular.module("myApp")
.controller("favoritesController", function ($scope, myService, $window, $http) {
/*fields of x to show in modal*/
// $scope.Xname = "hh";
// $scope.Xdesc = "hh";

    myService.getFavorites($window).then(function(response){
        
        
        if(response.data!= null){
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

    $scope.changeData=function(x){
        $scope.Xname = x.IntrestName;
        $scope.Xdesc = x.IntrestDescription;
        $scope.XcountView = x.IntrestViewCounter;
        $scope.Xrank = x.calculatedRank+"%";

        

        
        //checkkkkkkkkkkkkkkkkkkk
        myService.getDetailsForReview($window, x.IntrestName)
        .then(function(response){
            console.log("response"+response.data);
            $scope.Xreview = response.data;
    
            
            }, function(response) {
                $scope.Xrank = response.statusText;
            });

    }


    $scope.sortByCat= function(){

            myService.sortFavoritesByCat($window)
            .then(function(response){
                console.log("records="+$scope.records);
                $scope.records = response.data;
        
                
                }, function(response) {
                    $scope.records = response.statusText;
                });
        
       
        }

        $scope.myFunc = function(x) {
            // console.log("in func");             
            var myModal = document.getElementById('myModal');
            // var span= document.getElementsByClassName("close")[0];
            myModal.style.display= "block";             
            // span.onclick= function(){
            //     mymodel.style.display= "none";
            // }            
            // console.log(x['IntrestName']);           
            var myModalText = document.getElementById('modal-text');
            console.log(myModalText.innerText);
            myModalText.innerHTML = "Nirrrr";
            console.log(myModalText.innerHTML);
            // myModalText.style.border = "1px solid green";
            // myModalText.style.height = "70px";
            // myModalText.style.width = "70px";
            // alert("POI View Counter"+(x['IntrestViewCounter'])+"/n"+
            // "POI Category");
        };

    $scope.sortByRank= function(){

        myService.sortFavoritesByRank($window)
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });
    
   
    }

    $scope.removeFromFavorites = function(interestName){

        console.log("scubar= "+interestName );
        myService.removeFromFavoritesList($window,interestName )
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });

    }




})

 


