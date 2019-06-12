
angular.module("myApp").service('myService', function($http){

    console.log("Service created");
    this.login = function(username, pass){

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

    this.register = function(){
        
    }
})