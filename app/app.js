'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'myApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.directive('countDown', ['$interval', function($interval){
  return {
    link: function(scope, element, attrs){

      var timer;  
      var duration = 3;
      
      function updateTime(){
       
        element.text(duration); 
       
      }
      scope.$watch(attrs.countDown, function() {
        updateTime();
      });
      element.on('$destroy', function() {
        $interval.cancel(timer);
      });
      var timer = $interval(function(){
        duration--;
        updateTime();

        if (duration <= 0){
          console.log("times up");
          $interval.cancel(timer);
          console.log($scope);
           $scope.showTheForm = false;
        }
      },1000);
      
    } 
  };
  
}])

.controller('mainController', ['$scope',function($scope){
  // var duration = 300;
  // $scope.startClock = function(){
  //   counterService.clock(duration);
  //   console.log("started");

  // }
  
}]);
