(function(){
  angular.module('myApp',[]).
    controller('parentController', parentController).
    controller('childController',childController);
parentController.$inject = ['$scope'];
childController.$inject = ['$scope'];

function parentController($scope)
{
  $scope.firstName = "Shubham";
  $scope.getMessage = function()
  {
    return "Hey! Good Morning";
  };

  $scope.obj = {'name':'Object In Parent'};
  console.log($scope);
}

function childController($scope)
{
  console.log("Parent First Name: "+ $scope.firstName );
  $scope.obj.name = "Shubham 2";
  console.log("Name Property: "+ $scope.obj.name);
  // console.log($scope);
}

})();
