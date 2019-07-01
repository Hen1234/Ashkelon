
angular.module("myApp").service('myService', function($http){

    console.log("Service created");
    this.login = function(username, pass){

        console.log("userrrrr= "+username);
        console.log("function was called");
        return   $http({
            method:'POST',
            url: 'http://localhost:3000/Users/login',
            data: {
                "username": username,
                "password":pass
            } 
                    
        })
    }

    this.registerGetCategories = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Users/GetCategories'

        })
    }

    this.registerGetVerificationQuestions = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Users/GetVerificationQuestions'

        })
    }

    this.registerGetCountries = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Users/GetCountries'

        })
    }

    this.register = function(unameUser, passwordUser,fnameUser, lnameUser, countryUser, cityUser,
        emailUser, interest1, interest2, question1, question2, vanswer1, vanswer2){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/Users/register',
            data: {
                "userName": unameUser,
                "password":passwordUser,
                "firstName": fnameUser,
                "lastName": lnameUser,
                "city": cityUser,
                "country": countryUser,
                "email": emailUser,
                "intrest1": interest1,
                "intrest2": interest2,
                "question1": question1,
                "question2": question2,
                "answer1": vanswer1,
                "answer2": vanswer2
            } 

        })
    }

    this.retrievePass = function(username){
        console.log("user= "+username);
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/Users/questionRetrival',
            data:{
                "username": username
            }

        })
    }

    this.answerVerifyQ = function(username1, userAnswer){
        return $http({
            method: 'POST',
            url: 'http://localhost:3000/Users/answerRetrival',
            data:{
                "username": username1,
                "answer": userAnswer
            }

        })


    }

    this.recommendedPOI = function($window){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/private/getTwoMostPOIForUserbyInterest',
            headers: {
                    'x-auth-token': $window.sessionStorage.getItem('token')
            }

        })

    }

    this.twoLastFavorites = function($window){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Favorites/private/GetTwoLastSites',
            headers: {
                    'x-auth-token': $window.sessionStorage.getItem('token')
            }

        })

    }

    this.getFavorites = function($window){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Favorites/private/GetFavoritesListDetails',
            headers: {
                    'x-auth-token': $window.sessionStorage.getItem('token')
            }

        })

    }

    this.sortFavoritesByCat = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Favorites/private/GetFavoritesListByCategories',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        }
        })
    }

    
    this.sortFavoritesByRank = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Favorites/private/GetFavoritesListByRank',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        }
        })
    }

    this.sortFavoritesByRank = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Favorites/private/GetFavoritesListByRank',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        }
        })
    }

    this.sortPOIbyRank = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetPOIListByCalculatedRank'
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })



    }

    this.getPOIbyCat = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetPOIListByCategories',
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })


    }

    
    this.getPOIbyCatSport = function($window){
        

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetSitesByCategory/sport'
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })


    }

    this.getPOIbyCatShopping = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetSitesByCategory/shopping'
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })

    }

    this.getPOIbyCatRestaurant = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetSitesByCategory/restaurant'
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })

    }

    this.getPOIbyCatFood = function($window){
        console.log("here foodddd");
        console.log("here tokennn= "+$window.sessionStorage.getItem('token'));

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetSitesByCategory/food'
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // }
        })

    }

    this.getDetailsForReview = function($window, interestName ){

        console.log("poi= "+interestName);
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetPOIDetails/'+interestName
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // },
            // params: {
            //     "interestName" : interestName
            // }
        })

    }

    this.removeFromFavoritesList = function($window, interestName ){

        console.log("poi= "+interestName);
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3000/Favorites/private/RemoveFromFavoritesList/'+interestName,
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        },
      
        })

    }

    this.createFeed = function(xIntrestName, rankNum,description, $window){

        return $http({
            method: 'POST',
            url: 'http://localhost:3000/POI/private/CreateReview',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        },
            data:{
                "rank": rankNum,
                "description": description,
                "interestName": xIntrestName
        }
      
        })


    }

    this.searchPOI = function(interestName, $window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetPOIDetails/'+interestName
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // },
    
      
        })

    }

    this.getPOIbyCat= function(catName, $window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/GetSitesByCategory/'+catName
        //     headers: {
        //         'x-auth-token': $window.sessionStorage.getItem('token')
        // },
    
      
        })


    }

    this.addToFavorites= function(InterestName, $window){

        return $http({
            method: 'POST',
            url: 'http://localhost:3000/favorites/private/AddToFavoritesList',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        },
            data:{
                "pointOfIntrest": InterestName

    }
  
    })
    
    
    }

    this.getThreeRandom = function($window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/POI/threeRandomPOI'

        })
    }

    this.getNumOfFavorites = function( $window){

        return $http({
            method: 'GET',
            url: 'http://localhost:3000/favorites/private/GetNumOfFavorites',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        },
    
      
        })

    }

    this.insertUserOrder = function($window,orderArray){

        return $http({
            method: 'POST',
            url: 'http://localhost:3000/favorites/private/getUserOrder',
            headers: {
                'x-auth-token': $window.sessionStorage.getItem('token')
        },  data: {
            "order": orderArray
            
        } 
    
      
        })

    }
})