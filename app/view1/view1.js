'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.a = Math.floor(Math.random() * 100);
  $scope.b = Math.floor(Math.random() * 100);
  $scope.c = $scope.a + $scope.b 
  console.log($scope.c);
  $scope.answerYes = false;
  $scope.submit= function(){
  
    if ($scope.c = $scope.answer){
      $scope.answerYes = true;
      $scope.answerNo = false;
      console.log('true');
      

    }else{
      $scope.answerNo= true;

    }
  }

}]);