/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('announcementsCtrl', ['$scope', '$http',
    function ($scope, $http) {

    $scope.header = "";

    $http.get('/announcementsHeader').then(function(response) {
        $scope.header = response.data.header;
        });
    }]);