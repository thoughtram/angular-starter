angular.module('helloModule', [
  'ngRoute'
])

.config(function ($routeProvider) {
  $routeProvider.when('/hello', {
    controller: 'HelloController as ctrl',
    templateUrl: 'hello.tpl.html'
  });
})

.controller('HelloController', function () {
  this.name = 'World';
});
