var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>MESSAGE FROM DIRECTIVE</h1>"
    };
});
app.controller('myCtrl', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);
});
var app2 = angular.module("myApp2", []);
app2.controller('times', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});
