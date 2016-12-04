(function(){
  angular.module('myApp',[]).
    controller('parentController', ['$scope',parentController]).
    controller ('childController', childController);

  function parentController($scope)
  {
    // parent = this;
    this.value = "Parent value is 5";
    console.log($scope);
  }

  function childController()
  {
    this.value = "Child Value is 9";
  }
})();
