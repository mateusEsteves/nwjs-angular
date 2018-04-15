(function() {
    'use strict';
    
    angular.module('nwjs-angular')
    .controller('SearchController', function SearchController($scope, TimelineService) {
        
        $scope.timelineData = [];
        $scope.filters = {};
        
        function initializeController() {
            TimelineService.fetchTimelineData()
            .then(function onFetchSuccess(response) {
                if (!response.error) {
                    $scope.timelineData = response.data;  
                }
            });
        }
        
        initializeController();
    });
})();