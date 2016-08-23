var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/Home/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: '/Home/second',
        controller: 'secondController'
    });
});

myApp.controller('mainController', ['$scope', '$log', '$http', '$location', function ($scope, $log, $http, $location) {

            

}]);


myApp.controller('secondController', ['$scope', '$log', '$http', '$location', function ($scope, $log, $http, $location) {

   

}]);













/*$http.get('/api')
    .success(function (result)
    {
        $scope.rules = result;
        console.info(result);
    })
    .error(function (data, status)
    {
        console.log(data);
    });


    $scope.postToDB = function ()
    {
        $http.post('/api', { newRule: $scope.newRule })
        .success(function (result) {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function (data, status) {
            console.log(data);
        });
    }



    $scope.removeFromDB = function () {
        $http.post('/api', { newRule: $scope.newRule, operation: true })
        .success(function (result) {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function (data, status) {
            console.log(data);
        });
    }*/