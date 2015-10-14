angular.module('starter.controllers')
.controller('LandingPageController', function($scope, $stateParams) {
  $scope.text = "Landing";

  init();

  function init(){
    console.log('land!');
  };

});
