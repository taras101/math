'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
  $scope.a = Math.floor(Math.random() * (12 -3)) + 3;
  $scope.b = Math.floor(Math.random() * (25 -5)) + 5;
  $scope.c = $scope.a * $scope.b 
  console.log($scope.c);

  $scope.submit= function(){
  
    if ($scope.c == $scope.answer){
      $scope.answerYes = true;
      $scope.answerNo = false;
      // console.log('true');   

    }else{
      $scope.answerNo= true;
    }
  }
}]);