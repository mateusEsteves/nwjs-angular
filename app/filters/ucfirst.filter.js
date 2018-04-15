(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .filter('ucfirst', function ucFirst() {
        return function (string) {
            let firstLetter = string[0].toLocaleUpperCase();
            let resultString = firstLetter + string.slice(1).toLocaleLowerCase();
            return resultString;
        }
    });
})();