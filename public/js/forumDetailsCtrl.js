/**
 * Created by Allison on 7/6/17.
 */
var app = angular.module('huddleBoard');
app.controller('forumDetailsCtrl', ['$scope', '$http',
    function ($scope, $http) {

        $scope.header = "";

        $http.get('/forumDetailsHeader').then(function(response) {
            $scope.header = response.data.header;
        });

        $scope.lines = [{
                text: "Name:"},
            {
                text: 'Schedule:'},
            {
                text: 'Leader:'},
            {
                text: 'Facilitator:'},
            {
                text: 'Dial-In Number:'},
            {
                text: 'Objective:'
        }];
    }]);