var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>HELLO WORLD</h1>"
    };
});
