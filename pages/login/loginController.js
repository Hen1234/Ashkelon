
// login controller
// angular.module("myApp")
// .controller("loginController", function ($scope, $window, myService) {
//     var username = 'hen4';//uname.value;
//     console.log("user123="+username);
//     var pass = '1234567';//password.value;
//     console.log(pass);
//     let key = 'token';

//     $scope.submit = function(){

//         myService.login(username,pass).then(function(response){
//             $scope.records = response.data;
//             $window.sessionStorage.setItem(key,response.data); 
//             console.log("tokennn= "+$window.sessionStorage.getItem(key));
        
//         }, function(response) {
//             $scope.records = response.statusText;
//         });


    angular.module("myApp")
    .controller("loginController", function ($scope, $window, myService, $location) {
   

    $scope.submit = function(){
      
        //routeProvider.navigateByUrl('pages/about/about.html');

        var username = uname.value;
        console.log(username);
        var pass = password.value;
        console.log(pass);
        let key = 'token';
        myService.login(username,pass).then(function(response){
        //$scope.records = response.data;
        $window.sessionStorage.setItem(key,response.data); 
        console.log("tokennn= "+$window.sessionStorage.getItem(key));

        document.getElementById("alertAlignLeft").innerHTML = "hello "+username+"!"; 
      
        var userM = document.getElementsByClassName("userMode");
        for(i=0; i<userM.length; i++){
            userM[i].style.display = 'block';
        }

        guestMenu.style.display = 'none';
       
        document.getElementById("alertAlignLeft");
        $scope.mfUser ="false";
        $location.url('/loggedIn');


        
        
        }, function(response) {
            $scope.records = response.statusText;
        });


        // $http({
        //                 // method: 'GET',
        //                 // url: 'http://localhost:3000/Users/select'
        //                 method:'POST',
        //                 url: 'http://localhost:3000/Users/login',
        //                 data: {
        //                     // username: "hen2",
        //                     // password: "123"
        //                     "username": username,
        //                     "password":pass
        //                 }           
        //             }).then(function (response) {
        //                 $scope.records = response.data;
                     
        //                 $window.sessionStorage.setItem(key,response.data); 
        //                 console.log("tokennn= "+$window.sessionStorage.getItem(key));
        //             }, function(response) {
        //                 $scope.records = response.statusText;
        //             });
                   
        //     $http({

        //         method:'GET',
        //         url: 'http://localhost:3000/POI/private/getTwoMostPOIForUserbyInterest',
        //         headers: {
        //             'x-auth-token': $window.sessionStorage.getItem(key)
        //         }
              
        //     }).then(function (response) {
        //         $scope.records = response.data;
        //     }, function(response) {
        //         $scope.records = response.statusText;
                     
        //     })



    };

    $scope.retrievePassFunc = function(){
        
        var username1 = uname.value;
        if(username1 == ""){
            $window.alert('Please enter your user name');
        }else{

            myService.retrievePass(username1).then(function(response){
                // $scope.verifyQuestion = response.data;
                var userAnswer1 = $window.prompt(response.data[0]['question1']);
                console.log(response.data);
                console.log("q1= "+response.data[0]['question1']);
                console.log("q2= "+response.data[0]['question2']);
                var question2 = response.data[0]['question2'];
    
                myService.answerVerifyQ(username1, userAnswer1).then(function(response){

                      if(userAnswer1==null){

                      }
                      else{
                                //wrong answer
                    
                      if(response.data == "Wrong answer"){
                        var userAnswer2 = $window.prompt(question2);
                        myService.answerVerifyQ(username1, userAnswer2).then(function(response){
                            
                              //wrong answer
                            if(response.data == "Wrong answer"){
                                $window.alert("Wrong answer");
                          
                            }else{
                                // console.log(JSON.stringify(response.data,null,4));
                                $window.alert('Your password is: ' + response.data[0]['password']);
            
                            }
            
                        })
                        
                    }else{
                        $window.alert('Your password is: ' + response.data[0]['password']);
                    }


                    // if(!(response.data == "Wrong answer")){
                    //     console.log("pass= "+JSON.stringify( response.data,null,4));
                    //     $window.alert('Your password is: ' + response.data[0]['password']);
                    // //wrong answer
                    // }else if( (response.data[0]['question2']) != ""){
                       
                    //     var userAnswer2 = $window.prompt(question2);
                       
                    //     myService.answerVerifyQ(username1, userAnswer2).then(function(response){
                            
                            
                    //         if(!(response.data == "Wrong answer")){
                    //             $window.alert('Your password is: ' + response.data[0]['password']);
                    //         //wrong answer
                    //         }else{
                    //             // console.log("niiir");
                    //             // console.log(JSON.stringify(response.data,null,4));
                    //             $window.alert(response.data);
            
                    //         }
            
                    //     })
                    
                    // }else{
                    //     $window.alert(response.data);
                    // }

                      }
                    
                  
    
                })
    
                
                // $scope.verifyQuestion1 = response.data[0]['question1'];
                // $scope.verifyQuestion2 = response.data[0]['question2'];
    
            }, function(response) {
                $scope.verifyQuestion = response.statusText;
            });

        }
    

    }  

});
