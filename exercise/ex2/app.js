(function(){
  'use strict';

  angular.module('app2', [])
  .controller('upCase',upCaseChar);

  function upCaseChar($scope, $filter)
  {
    $scope.name = 'Shubham';

    $scope.upperCase = function()
    {
      var upMe = $filter('uppercase');
      $scope.name = upMe($scope.name);
    };
  }
})();
