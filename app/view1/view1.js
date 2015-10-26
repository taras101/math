'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
 var genQuiz = function(){ $scope.a = Math.floor(Math.random() * (50 -10)) + 10;
   $scope.b = Math.floor(Math.random() * (50 -10)) + 10;
   $scope.c = $scope.a + $scope.b 
   console.log($scope.c);
 }
$scope.showTheForm = true;
 genQuiz();
 $scope.score=0;

  $scope.submit= function(){
    // var taras = 6;
    
    // counter(taras);
    if ($scope.c == $scope.answer){
      $scope.answerYes = true;
      $scope.answerNo = false;
      $scope.score++;
      genQuiz();
      $scope.answer=null;
      // console.log('true');   

    }else{
      $scope.answerNo= true;
      $scope.answerYes = false;
      $scope.answer=null;
    }
  }

}]);