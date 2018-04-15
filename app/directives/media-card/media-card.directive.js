(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .directive('mediaCard', function MediaCard() {
        return {
            restrict: 'E',
            templateUrl: '/app/directives/media-card/media-card.html',
            scope: {
                mediaObject: '='
            }
        }
    });
})();