(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];

function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Yaakov";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Wachers: " + JSON.stringify($scope.$$watchersCount));
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter  = function(){
    $scope.counter++;
  }

  // 4th Watcher
  $scope.$watch(function(){ 
    console.log("Digest loop fired!");
  });

  // $scope.$watch('onceCounter', function(newValue, oldValue){
  //   console.log("old value: " + oldValue);
  //   console.log("new value: " + newValue);
  // });

  // $scope.$watch('counter', function(newValue, oldValue){
  //   console.log("old value: " + oldValue);
  //   console.log("new value: " + newValue);
  // });



}

})();