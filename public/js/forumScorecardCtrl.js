/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumScorecardCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/forumScorecardHeader').then(function(response) {
            $scope.header = response.data.header;
        });
    }]);