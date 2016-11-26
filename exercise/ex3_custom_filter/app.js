(function(){
  angular.module('myApp',[])
    .controller ('filter_string', filter_string)
    .filter('custom', customFilterFactory);

    filter_string.$inject = ['$scope','customFilter'];
    function filter_string($scope, customFilter)
    {
      $scope.comment = '';

    }

    function customFilterFactory(){
      return function (input){
          return input.replace (/sex/g,'***');
      };
    }
})();
