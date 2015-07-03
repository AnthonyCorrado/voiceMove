(function() {
  'use strict';

  angular
    .module('app.voiceInput')
    .controller('VoiceInput', VoiceInput);

    VoiceInput.$inject = ['$scope', 'wordService', 'actionService'];

    function VoiceInput($scope, wordService, actionService) {
      var vm = this;

      vm.voiceInput =[];

      $scope.speechRecog = function() {
        var maxMatches = 1;
        var promptString = "Speak now"; 
        window.plugins.speechrecognizer.startRecognize(function(result){
          var words = result[0].toLowerCase();
          console.log(wordService.analyze(words));
          var objectDetails = wordService.analyze(words);
          var frame = actionService.createFrame(objectDetails);
          $scope.$apply(function() {
            if (objectDetails.name[0] === 'red') {
              $scope.redBallFrame = frame;
            }
            else if (objectDetails.name[0] === 'orange') {
              $scope.orangeBallFrame = frame;
            }
            else if (objectDetails.name[0] === 'both' || objectDetails.name[0] === 'balls') {
              $scope.redBallFrame = frame;
              $scope.orangeBallFrame = frame;
            }
          });
        }, function(errorMessage){
          console.log("Error message: " + errorMessage);
        }, maxMatches, promptString);
      }
    }
})();