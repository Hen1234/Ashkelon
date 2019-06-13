angular.module("myApp")
.controller("registerController", function ($scope, myService, $window, $location) {

    myService.registerGetCategories()
    .then(function (response) {
        $scope.options = response.data;
    }, function(response) {
        $scope.options = response.statusText;
    });

    myService.registerGetVerificationQuestions()
    .then(function (response) {
        $scope.questions = response.data;
    }, function(response) {
        $scope.questions = response.statusText;
    });


    $scope.submit = function(){

        $scope.regexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var unameUser = uname.value;
        var passwordUser = password.value;
        var fnameUser = fname.value;
        var lnameUser = lname.value;
        var countryUser = country.value;
        var cityUser = city.value;
        var emailUser = email.value;
        var interest1= fInterest.value;
        var interest2= sInterest.value;
        var question1 = fQuestion.value;
        var question2 = sQuestion.value;
        var vanswer1 = answer1.value;
        var vanswer2 = answer2.value;

        ///////////////////////////////////////$scope.uname

        myService.register(unameUser, passwordUser,fnameUser, lnameUser, countryUser, cityUser,
            emailUser, interest1, interest2, question1, question2, vanswer1, vanswer2)
        .then(function (response) {
            $scope.answer = response.data;
            $location.url('/home');
        }, function(response) {
            $scope.answer = response.statusText;
        });

    };

})