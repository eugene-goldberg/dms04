/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('workSummaryCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/workSummaryHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);