/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('tasksCtrl', ['$scope', '$http',
    function ($scope, $http) {

        //$scope.header = "";

        $http.get('/tasksHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);

