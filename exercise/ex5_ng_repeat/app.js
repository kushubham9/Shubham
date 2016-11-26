(function(){
  'use strict';
  var shopping_item1 = ['Choclates', 'Milk', 'Chicken', 'Cookies', 'Shirt', 'Jeans'];
  var shopping_item2 = [{
        name: 'Choclates',
        quantity: 10
      },
      {
        name: 'Milk',
        quantity: 20
      },
      {
        name: 'Chicken',
        quantity: 30
      },
      {
        name: 'Cookies',
        quantity: 100
      }
    ];

  angular.module('myApp',[])
    .controller ('shopping_cart',shopping);

  shopping.$inject = ['$scope', '$filter'];

  function shopping($scope, $filter)
  {
    $scope.list1 = shopping_item1;
    $scope.list2 = shopping_item2;
    $scope.show_watchers_count = function()
    {
      console.log($scope.$$watchersCount);
    };

    // $scope.filter_cart = function()
    // {
    //   $scope.list1 = $filter('filter')($scope.list1,$scope.search);
    // };
  }

})();
