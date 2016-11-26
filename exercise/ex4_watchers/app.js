(function(){
  'use strict';
  angular.module('myApp',[])
    .controller ('digest',digest);
  digest.$inject = ['$scope'];

  function digest($scope){
    $scope.count = 0;
    $scope.show_watchers_count = function()
    {
      console.log("# of Watchers " +$scope.$$watchersCount);
    };

    $scope.increment_counter = function()
    {
      // $scope.count++;
      setTimeout(function()
          {
            $scope.$apply(function(){

              $scope.count++;
              console.log($scope.count);
            });
          },2000);
    };


  }
})();
