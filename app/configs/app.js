(function () {
    'use strict';
    
    angular.module('nwjs-angular', [
        'ui.router',
        'ngMaterial',
        'ngMessages'
    ])
    .run(function initializeApp($rootScope) {
        // Exibir devtools
        var Window = require('nw.gui').Window.get();

        Window.showDevTools();

        Window.width = 1024;
        Window.height = 700;

        Window.setMinimumSize(1024, 700);
        Window.setMaximumSize(1024, 700);
    });
})();