/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/dashboards/analytical_method");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/common/content.html"
        })
        .state('dashboards.subject_area', {
            url: "/subject_area",
            templateUrl: "views/subject_area.html"
        })
        .state('dashboards.business_entity', {
            url: "/business_entity",
            templateUrl: "views/business_entity.html"
        })
        .state('dashboards.information_product', {
            url: "/information_product",
            templateUrl: "views/information_product.html"
        })
        .state('dashboards.business_function', {
            url: "/business_function",
            templateUrl: "views/business_function.html",
            data: { pageTitle: 'Business Functions' }
        })
        .state('dashboards_top', {
            abstract: true,
            url: "/dashboards_top",
            templateUrl: "views/common/content_top_navigation.html",
        })
        .state('dashboards.business_initiative', {
            url: "/business_initiative",
            templateUrl: "views/business_initiative.html"
        })
        .state('dashboards.business_goal', {
            url: "/business_goal",
            templateUrl: "views/business_goal.html"
        })
        .state('dashboards.performance_metric', {
            url: "/performance_metric",
            templateUrl: "views/performance_metric.html"
        })
        .state('dashboards.analytical_method', {
            url: "/analytical_method",
            templateUrl: "views/analytical_method.html"
        })
        .state('dashboards.business_question', {
            url: "/business_question",
            templateUrl: "views/business_question.html"
        })
        .state('technical', {
            abstract: true,
            url: "/technical",
            templateUrl: "views/common/content.html"
        })
        .state('technical.data_entity', {
            url: "/data_entity",
            templateUrl: "views/data_entity.html"
        })
        .state('technical.data_source', {
            url: "/data_source",
            templateUrl: "views/data_source.html"
        })
        ;

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
