(function(){
  'use strict';

  angular.module ('myFirstApp',[])

  .controller('firstController',function($scope)
  {
      $scope.name = "Shubham";
      $scope.sayHello = function(){
        return $scope.name;
      };
  });

  angular.module('asciiCal',[])
  .controller ('calculate',function($scope){
    $scope.name = '';
    $scope.numeric = 0;

    $scope.displayNumber = function(){
      $scope.numeric = calculateFunc($scope.name);
    };


    function calculateFunc(string)
    {
      var loc_numeric = 0;
      for (var i=0; i<string.length; i++)
      {
          loc_numeric += string.charCodeAt(i);
      }
      return loc_numeric;
    }
  });
})();
