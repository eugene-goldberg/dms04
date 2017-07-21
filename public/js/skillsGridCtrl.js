/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('skillsGridCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/skillsGridHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);