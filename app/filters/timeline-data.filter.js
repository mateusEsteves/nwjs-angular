(function () {
    'use strict';
    
    angular.module('nwjs-angular')
    .filter('timelineDataFilter', function TimelineDataFilter() {
        let Soundex = require('soundex');
        
        function extractSoundexArrayFromLongString(string) {
            let splittedString = string.split(/\s+/);
            let soundexArray = splittedString.map((string) => {
                return Soundex(string, true);
            });

            return soundexArray;
        }
        
        function hasSoundexMatch(string1, string2) {
            let string1SoundexArray = extractSoundexArrayFromLongString(string1);
            let string2SoundexArray = extractSoundexArrayFromLongString(string2);

            for (let string1ComponentSoundex of string1SoundexArray) {
                for (let string2ComponentSoundex of string2SoundexArray) {
                    if (string1ComponentSoundex === string2ComponentSoundex)
                        return true;    
                }
            }
            
            return false;
        }
        
        return function filter(timelineDataArray, filterBy = {}) {
            let dataToFilter = angular.copy(timelineDataArray);
            let numberOfPropertiesToMatch = Object.keys(filterBy).length;
            
            if (numberOfPropertiesToMatch === 0) return dataToFilter;
            
            let filteredData = dataToFilter.filter((item) => {
                let numberOfMatchedProperties = 0;

                Object.keys(filterBy).forEach((key) => {
                    if (typeof item[key] !== 'undefined' && hasSoundexMatch(item[key], filterBy[key])) {
                        numberOfMatchedProperties++;
                    }
                });
                
                return numberOfMatchedProperties === numberOfPropertiesToMatch;
            });
            
            return filteredData;
        }
    })
})();