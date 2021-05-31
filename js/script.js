const URL = "https://covid19.mathdro.id/api"
const URLINDIA = "https://api.covid19india.org/state_district_wise.json"

let app = angular.module('MyApp', [])

app.controller('MyCtrl', ($scope, $http)=>{
    $scope.title = "Stay Home Stay Safe";
    $scope.subtitle = "World Covid Case Portal"

    // $scope.changeValue = () => {
    //     $scope.title = "This is home time";
    //     console.log("changed title");
    // };
    // console.log("Automating Loaded");
    // calling API 
    $http.get(URL).then( (response)=>{
        //success
        $scope.all_data = response.data;

    },(error)=>{
        // error 
        console.log("error");
    })

    $scope.get_c_data = () => {
        let country = $scope.c;
        if(country == "")
        {
            // console.log("contry is null");
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${$scope.c}`).then( (response)=>{
            // console.log("success");
            $scope.c_data = response.data;
        }, (error)=>{
            console.log("error");
        })
    };
    $scope.get_d_data = () => {
        let district = $scope.d;
        if(district == "")
        {
            // console.log("district is null");
            $scope.d_data = undefined;
            return;
        }
        $http.get(URLINDIA).then( (response)=>{
            //success
            $scope.d_data = response.data;
    
        },(error)=>{
            // error 
            console.log("error");
        })
    };
});