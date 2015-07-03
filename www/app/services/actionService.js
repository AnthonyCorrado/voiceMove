(function() {

    angular
        .module('app.services')
        .factory('actionService', actionService);

    actionService.$inject = [];
    
    function actionService() {

        var service = {
            createFrame: createFrame,
            getFrame: getFrame
        };
        return service;

        function createFrame(objects) {
            // console.log(objects.name);
            var action = {};
            switch (objects.action[0]) {
                case "up":
                    action = {"bottom": "80%"};
                    break;
                case "grab":
                    action = {"bottom": "80%"};
                    break;
                case "lift":
                    action = {"bottom": "80%"};
                    break;
                case "down":
                    action = {"bottom": "20%"};
                    break;
                case "drop":
                    action = {"bottom": "20%"};
                    break;
                case "release":
                    action = {"bottom": "20%"};
                    break;
                case "left":
                    action = {"left": "10%"};
                    break;
                case "right":
                    action = {"left": "80%"};
                    break;
                }
            return action;

        }

        function getFrame() {
            var baseRef = new Firebase("https://voicemove.firebaseio.com");
            var ballOne = baseRef.child("/ballOne");
            return ballOne;
            // beersData.getAllBeers = function() {
            // var beers = {};
            // var deferred = $q.defer();
            // beerRef.on("value", function(snapshot) {
            //     deferred.resolve(snapshot.val());
            // });
            // return deferred.promise;
        // };
        }

    }
})();