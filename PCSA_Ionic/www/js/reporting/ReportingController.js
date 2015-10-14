angular.module('starter.controllers')
.controller('ReportingController', function($scope, $stateParams) {
  $scope.text = "reporterrr";

  $scope.fire = function(){
    console.log('holla');
  };

});
