(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .service('TimelineService', function TimelineService($http) {
       
        this.fetchTimelineData = function () {
            return $http({
                method: 'GET',
                url: 'https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline'
            });
        }
        
    });
})();