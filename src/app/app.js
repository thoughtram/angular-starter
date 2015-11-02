angular.module('StarterApp', [
  'helloModule',
  'ngRoute',
  'templateCache'
])

.config(function ($routeProvider) {
  $routeProvider.otherwise('/hello');
});
