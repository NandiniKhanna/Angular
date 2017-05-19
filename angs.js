var arr= [];
var i=0;
var k=0;
var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'', done:false}];
    $scope.todoAdd = function() {
        k++;
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
      };
      $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
          });
        };
        $scope.save = function() {
          var oldList = $scope.todoList;
          $scope.todoList = [];
          angular.forEach(oldList, function(x) {
            if (!x.done) arr[i++] = "false";
            else arr[i++]="true";
            $scope.todoList.push(x);
          });
        };
      });
