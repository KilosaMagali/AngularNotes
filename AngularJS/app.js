var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
        .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    });
});

myApp.controller('mainController', ['$scope', '$log', '$http', '$location', 'nameService', function ($scope, $log, $http, $location, nameService) {
    $scope.people = [
        {
        name: 'John Doe',
        address: '118, route de Narbonne',
        city: 'Toulouse',
        state: 'Haute Garonne',
        zip: '31000'
        },
        {
            name: 'Magali Doe',
            address: '118, route de Narbonne',
            city: 'Toulouse',
            state: 'Haute Garonne',
            zip: '31000'
        },
        {
            name: 'Erick Doe',
            address: '118, route de Narbonne',
            city: 'Toulouse',
            state: 'Haute Garonne',
            zip: '31000'
        },
        {
            name: 'Cech Petr',
            address: '118, route de Narbonne',
            city: 'Toulouse',
            state: 'Haute Garonne',
            zip: '31000'
        }
    ]
        

    

    $scope.formattedAddress = function (person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    }
 
}]);


myApp.controller('secondController', ['$scope', '$log', '$http', '$location', '$routeParams', 'nameService', function ($scope, $log, $http, $location, $routeParams, nameService) {

    

}]);

myApp.service('nameService', function () {
    
});


myApp.directive("searchResult", function () {
    return {
        /*restrict: 'E', //AECM Attributes, Elements, Classes, coMments
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: { //Isolating the scope : Own scope, not child scope
            /*personName: "@", //Poked a hole from the view, telling the scope that person-name is in and its type is text
            personAddress: "@"*/
     /*       personObject: "=", //A two way binding, whatever happens to the object in the scope or in the directive changes everywhere
            formattedAddressFunction: "&"
        },
        transclude: true*/

        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        transclude: true

    }
});












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
