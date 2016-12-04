(function(){
  angular.module('ShoppingListCheckOff',[]).
    controller('ToBuyController',ToBuyController).
    controller('AlreadyBoughtController',AlreadyBoughtController).
    service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService)
    {
      this.listItems = function()
      {
        return ShoppingListCheckOffService.getToBuyItems();
      };

      this.doBuy = function (index)
      {
        ShoppingListCheckOffService.BuyItem(index);
      };
    }

    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
      this.listItems = function()
      {
        return ShoppingListCheckOffService.getAlreadyBoughtItems();
      };

    }

    function ShoppingListCheckOffService()
    {
      var toBuy_items = [
          {
            'name': 'Cookies',
            'quantity': '10'
          },
          {
            'name': 'Sugar',
            'quantity': '20'
          },
          {
            'name': 'Brownie',
            'quantity': '3'
          },
          {
            'name': 'Puddings',
            'quantity': '15'
          },
          {
            'name': 'Choclates',
            'quantity': '12'
          }
      ];

      var bought_items = [];

      this.BuyItem = function(index)
      {
        var item = toBuy_items[index];
        bought_items.push(item);
        toBuy_items.splice(index,1);
      };

      this.getToBuyItems = function ()
      {
        return toBuy_items;
      };

      this.getAlreadyBoughtItems = function()
      {
        return bought_items;
      };
    }

})();
