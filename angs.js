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
