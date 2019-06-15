
angular.module("myApp")
.controller("homeController", function ($scope, $http) {
  
        $http({
                        method: 'GET',
                        url: 'http://localhost:3000/POI/threeRandomPOI'
                              
                    }).then(function (response) {
                        
                        // var name1 = response.data[0]['IntrestName'];
                        // var pic1 = response.data[0]['IntrestPicture'];
                      
                        //response.data =[ 
                        //     {'IntrestName':'Nir!!', ...all fields},
                        //     {'IntrestName':'hen!'...all fields},
                        //     {'IntrestName':'osher!!!!!!'...all fields}
                        //  ]
                        $scope.records = response.data;
                        // $scope.records = response.data[0].IntrestName+","+response.data[0].IntrestPicture;
                        // i=$scope.records[0].IntrestName;
                        
                    }, function(error) {
                        $scope.records = error.statusText;
                    });
            // $scope.myFunc = function(x) {
            //     // console.log("in func");             
            //     var myModal = document.getElementById('myModal');
            //     // var span= document.getElementsByClassName("close")[0];
            //     myModal.style.display= "block";             
            //     // span.onclick= function(){
            //     //     mymodel.style.display= "none";
            //     // }            
            //     // console.log(x['IntrestName']);           
            //     var myModalText = document.getElementById('modal-text');
            //     console.log(myModalText.innerText);
            //     myModalText.innerHTML = "Nirrrr";
            //     console.log(myModalText.innerHTML);
            //     // myModalText.style.border = "1px solid green";
            //     // myModalText.style.height = "70px";
            //     // myModalText.style.width = "70px";
            //     // alert("POI View Counter"+(x['IntrestViewCounter'])+"/n"+
            //     // "POI Category");
            // };

     
    

    

});
