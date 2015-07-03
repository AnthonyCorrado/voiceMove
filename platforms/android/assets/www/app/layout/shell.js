(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$scope'];

    function Shell($scope) {
      var vm = this;

      $scope.init = function() {
        vm.vrRoom = true;
      }
    }
})();