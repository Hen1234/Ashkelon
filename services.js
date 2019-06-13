
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
})