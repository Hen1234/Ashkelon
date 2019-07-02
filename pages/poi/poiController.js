//poi controller
angular.module("myApp")
.controller("poiController", function ($rootScope, $scope, myService, $window) {
    console.log("poiFlag "+$rootScope.loginFlag);

    var favorites = null;

    $scope.changeStarIcon = function (idName,cases ,idDesc){
        //CAHNGE:
        if( $rootScope.loginFlag == true){
        var flagInit = true;
        var stringName = idName;
        var desc = idDesc;
        if(idName.IntrestName != undefined){
            flagInit = false;
            stringName = idName.IntrestName;
            desc = idName.IntrestDescription;
        }
        console.log("className: "+ stringName);
        //"fa fa-star-o"- empty star, fa fa-star- full star
        //for sort by categories
        var counter = countFavorites.innerHTML;
        counter = parseInt(counter);
        if(cases == 0){
            console.log("className : " +document.getElementById(stringName).className);
            if( document.getElementById(stringName).className == "fa fa-star"){
                // console.log("full to empty " + idName.IntrestName );
                document.getElementById(stringName).className = "fa fa-star-o";
                
                myService.removeFromFavoritesList($window,stringName);
                counter--;
            }
            else{
                // console.log("empty to full : " + idName.IntrestName );
                document.getElementById(stringName).className = "fa fa-star";
                if(!flagInit){
                    myService.addToFavorites(stringName, $window);
                    counter++;
                }


            }
        }

        //for sort by rank and filter by category
        if(cases == 1){
          
            if(document.getElementById(desc).className == "fa fa-star"){

                document.getElementById(desc).className = "fa fa-star-o";
                myService.removeFromFavoritesList($window,stringName);
                counter--;
            }
            else{
                document.getElementById(desc).className = "fa fa-star";
                if(!flagInit){
                    myService.addToFavorites(stringName, $window);
                    counter++;
                }
            }
        }

        //for single poi
        if(cases == 2){

            if(document.getElementById(idName).className == "fa fa-star"){

                document.getElementById(idName).className = "fa fa-star-o";
                myService.removeFromFavoritesList($window,$scope.singlePOI);
                counter--;
            }
            else{
                console.log("hereeeesingle "+idName);
                document.getElementById(idName).className = "fa fa-star";
                if(!flagInit){
                    myService.addToFavorites($scope.singlePOI, $window);
                    counter++;
                }
            }
        }
        countFavorites.innerHTML = counter;
    }
}

    var changeStar = $scope.changeStarIcon;
    //TODO 
    //function called when the controller is loaded


    $scope.$watch('$viewContentLoaded', function(){
        //query to get all favorites elements

        myService.getFavorites($window).then(function(response){
        
        
            if(response.data!= "No such a user" ){
                favorites = response.data;
                console.log("fav= "+JSON.stringify(favorites,4,null));
                favorites.forEach(function (arrayItem) {
                    // console.log("name:" + arrayItem.IntrestName);
                    // if( $rootScope.loginFlag == true){
                        changeStar(arrayItem.IntrestName, 0 , arrayItem.IntrestDescription);
                    // }
                    // changeStarIcon(arrayItem.IntrestName, 1);
                    // changeStarIcon(arrayItem.IntrestName, 2);
                });
               
            //the user has no favorites
            }
        
            }, function(response) {
                $scope.records = response.statusText;
            });

        //for loop over the names and activate $scope.changeStarIcon (name, 0)
    });



    $scope.forFeed = function(x){

        $scope.interestNameForFeed = x.IntrestName;
        rankForFeed.value = "";
        reviewFromUser.value= "";

    }

    $scope.createFeedback = function(interestNameForFeed){

        var rankNum = rankForFeed.value;
        var description = reviewFromUser.value;
        // console.log("scope.= "+$scope.x.IntrestName);
        myService.createFeed(interestNameForFeed, rankNum,description, $window).
        then(function(response){


        }, function(response) {
                $scope.records = response.statusText;
        });
    }

    
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

        tableFavorites.style.display = 'none';
        imagesForSearch.style.display = 'none';
        imagesForRank.style.display = 'block';

        myService.sortPOIbyRank($window)
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
            });
    
   
    }
   
    $scope.searchPOI = function(){
       

        tableFavorites.style.display = 'none';
        imagesForSearch.style.display = 'block';
        imagesForRank.style.display = 'none';

        var name = searchPOI.value;
        // images1.style.display = 'none';
        myService.searchPOI(name, $window)
        .then(function(response){

            console.log("temppppp= "+response.data[0]);
            if(response.data == "No such a point of interest"){
                tableFavorites.style.display = 'block';
                imagesForSearch.style.display = 'none';
                imagesForRank.style.display = 'none';
                $window.alert('No such a point of interest');
            

            }else{
                  // images1.style.display = 'block';
            $scope.singlePOI = response.data[0]['IntrestName'];
            $scope.IntrestPicture = response.data[0]['IntrestPicture'];
            //$scope.records  = response.data[0]['IntrestName'];

            }
          
        }, function(response) {
            $scope.singlePOI = response.statusText;
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

    $scope.filterByCat = function(){


        
        tableFavorites.style.display = 'none';
        imagesForSearch.style.display = 'none';
        imagesForRank.style.display = 'block';
        var cat = category.value;
        myService.getPOIbyCat(cat, $window)
        .then(function(response){
            console.log("records="+$scope.records);
            $scope.records = response.data;
    
            
            }, function(response) {
                $scope.records = response.statusText;
        });


    }

    $scope.sortPOIbyCategories = function(){

        tableFavorites.style.display = 'block';
        imagesForSearch.style.display = 'none';

        imagesForRank.style.display = 'none';
        

    }

    




})

