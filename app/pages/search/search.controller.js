(function() {
    'use strict';
    
    angular.module('nwjs-angular')
    .controller('SearchController', function SearchController($scope, $filter, $mdSidenav, TimelineService) {
        
        $scope.timelineDataOriginal = [];
        $scope.timelineDataToShowOnPage = [];
        $scope.filters = {};
        
        
        function initializeController() {
            TimelineService.fetchTimelineData()
            .then(function onFetchSuccess(response) {
                if (!response.error) {
                    $scope.timelineDataOriginal = response.data; 
                    $scope.timelineDataToShowOnPage = response.data;
                }
            });
        }
        
        initializeController();
        
        function trimUnfilledFilters(filterObject) {
            let trimmedFilter = {};
            
            Object.keys(filterObject).forEach((key) => {
                if (filterObject[key].toString() !== '') {
                    trimmedFilter[key] = filterObject[key]
                }
            });
            
            return trimmedFilter;
        }
        
        $scope.filterData = function () {
            let filter = trimUnfilledFilters($scope.filters);
            $scope.timelineDataToShowOnPage = $filter('timelineDataFilter')($scope.timelineDataOriginal, filter);
            $scope.toggleSidebar();
        }
        
        $scope.clearFilters = function () {
            $scope.timelineDataToShowOnPage = angular.copy($scope.timelineDataOriginal);
            $scope.toggleSidebar();
        }
        
        $scope.toggleSidebar = function () {
            $mdSidenav('right').toggle();
        }
        
    });
})();