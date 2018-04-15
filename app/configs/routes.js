(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .config(function setupRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/search')
        $stateProvider.state({
            name: 'search',
            url: '/search',
            templateUrl: '/app/pages/search/search.html',
            controller: 'SearchController'
        });
    });
})();