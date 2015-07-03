(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('wordService', wordService);

    wordService.$inject = [];
    
    function wordService() {

        var service = {
            analyze: analyze
        };
        return service;

        function analyze(words) {
            console.log(words);

            var wordArray = words.split(" ");

            var startLoop = function() {
                var objectName = [];
                var objectAction = [];
                // iterates through keywords for actionable commands
                for (var i=0; i<wordArray.length; i++) {
                    if (loopItemKeys(i)) {
                        objectName.push(loopItemKeys(i)); // selects object(s)
                    }
                    if (loopActionKeys(i)) {
                        objectAction.push(loopActionKeys(i)); // selects action(s)
                    }
                }
                var objectDetails = {
                    "name": objectName,
                    "action": objectAction
                };
                return objectDetails
            }
            function loopItemKeys(i) {
                // higher specificity items to the right as these are
                // okay to overwrite first matches in this case
                // example: there are two items that are circles/balls, but only one item that is red
                var itemKeys = ['ball', 'circle', 'round', 'cup', 'cylinder', 'square', 'orange', 'red', 'blue', 'both', 'balls'];
                for (var x=0; x<itemKeys.length; x++) {
                    if (wordArray[i] === itemKeys[x]) {
                        return itemKeys[x];
                    }
                }
            }
            function loopActionKeys(i) {
                var actionKeys = [
                    'up', 'down', 'left', 'right',
                    'pickup', 'pick-up', 'lift', 'grab',
                    'drop', 'release', 'put'
                    ];
                for (var y=0; y<actionKeys.length; y++) {
                    if (wordArray[i] === actionKeys[y]) {
                        return actionKeys[y];
                    }
                }  
            }
            return startLoop();
        }
    }

})();