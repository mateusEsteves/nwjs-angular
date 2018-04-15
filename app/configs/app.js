(function () {
    'use strict';
    
    angular.module('nwjs-angular', [
        'ui.router'
    ])
    .run(function initializeApp($rootScope) {
        // Exibir devtools
        require('nw.gui').Window.get().showDevTools();
    });
})();