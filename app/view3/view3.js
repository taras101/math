'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope',function($scope) {
  $scope.a = Math.floor(Math.random() * (12 -6)) + 6;
  $scope.b = Math.floor(Math.random() * (99 -12)) + 12;
  $scope.d = Math.floor(Math.random() * (333 -99)) + 99;
  $scope.c = ($scope.a * $scope.b ) - $scope.d;
  console.log($scope.c);

  $scope.submit= function(){
  
    if ($scope.c == $scope.answer){
      $scope.answerYes = true;
      $scope.answerNo = false;
      console.log('true');   

    }else{
      $scope.answerNo= true;
    }
  }
}]);