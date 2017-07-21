/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('barometerCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/barometerHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);