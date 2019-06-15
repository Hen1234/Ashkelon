angular.module("myApp")
.controller("logoutController", function ($scope, myService, $window, $location) {

    $location.url('/home');
 

    // document.getElementById("alertAlignLeft").innerHTML = "Please  <a href='#!login' class= "alert-link">Log in</a>
    // or <a href='#!register' class= "alert-link">sign up</a> to continue
      
    var userM = document.getElementsByClassName("userMode");
    console.log ("the element : \n");
    for(i=0; i<userM.length; i++){
        console.log(userM[i]);
        userM[i].style.display = 'none';
    }

    guestMenu.style.display = 'block';

})