/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('fourmWorkCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/forumWorkHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);