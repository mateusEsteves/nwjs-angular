(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .service('TimelineService', function TimelineService($http, $q) {
        
        this.fetchTimelineData = function () {
            let deferred = $q.defer();
            
            $http({
                method: 'GET',
                url: 'https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline'
            }).then(function onSuccess(response) {
                deferred.resolve({
                    error: false,
                    data: response.data
                });
            }, function onError(error) {
                deferred.resolve({
                    error: true,
                    data: error
                });
            });
            
            return deferred.promise;
        }
        
    });
})();