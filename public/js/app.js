var huddleBoard = angular.module('huddleBoard', ['ui.router']);

huddleBoard.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
                url: '/',
                templateUrl: 'huddle_board.html'
            }
        )

});
