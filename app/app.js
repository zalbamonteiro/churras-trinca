var app = angular.module('app', ['ui.router']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
       .state('login', {
           url: '/login',
           templateUrl: 'app/main/main.html',
           controllerAs: 'vm',
           controller: 'mainCtrl',
           data: {
               pageTitle: 'Trinca Churras - Login'
           }
       }).state('all-churras', {
           url: '/all-churras',
           templateUrl: 'app/all-churras/all-churras.html',
           controller: 'allChurrasCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Trinca Churras - Todos os Churras'
           }
       }).state('churras-detail', {
           url: '/churras-detail',
           templateUrl: 'app/detail-churras/detail-churras.html',
           controller: 'detailChurrasCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Trinca Churras - Todos os Churras'
           }
       });

    $urlRouterProvider.otherwise('login');

}]);
