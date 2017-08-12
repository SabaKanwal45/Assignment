angular.module('myTable', [])
.controller('tableController', function($scope, $http) {
    $http.get("http://services.groupkt.com/country/get/all")
    .then(function (response) {
        $scope.names=response.data.RestResponse.result;
        console.log($scope.names);
     });
});