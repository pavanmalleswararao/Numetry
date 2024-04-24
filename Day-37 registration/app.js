var app = angular.module('registrationApp', []);

app.controller('registrationController', function($scope) {
  $scope.user = {};
  $scope.isRegistered = false;

  $scope.submitForm = function() {
    // Here you can send the form data to the server
    // using $http service or any other method
    // For now, we'll just show a success message
    $scope.isRegistered = true;
  };
});
