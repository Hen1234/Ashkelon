angular.module("myApp")
.controller("favoritesController", function ($scope, myService, $window, $http) {
   


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
    $scope.getpoi= function(poiName){

       
    
   
    }



})

 


