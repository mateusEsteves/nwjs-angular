(function () {
    'use strict';
    
    angular.module('nwjs-angular', [
        'ui.router',
        'ngMaterial',
        'ngMessages'
    ])
    .run(function initializeApp($rootScope) {
        // Exibir devtools
        require('nw.gui').Window.get().showDevTools();
    });
})();