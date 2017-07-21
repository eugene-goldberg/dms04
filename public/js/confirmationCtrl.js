/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('confirmationCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/confirmationHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);