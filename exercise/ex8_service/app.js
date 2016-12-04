//Service calls explained.
// How different controllers interact and how business logic is handled in Angular.

(function()
{
  angular.module('myApp',[]).
    controller('shoppingCart', ShoppingCart).
    controller('viewCart', viewCart).
    service('shoppingCartService', shoppingCartService);

  ShoppingCart.$inject = ['shoppingCartService'];
  function ShoppingCart(shoppingCartService)
  {
    this.addItem = function()
    {
      var item = {
        'name' : this.prodName,
        'quantity' : this.prodQuan
      };
      shoppingCartService.addItem(item);
    };
  }

  viewCart.$inject = ['shoppingCartService'];
  function viewCart(shoppingCartService)
  {
    this.getItemList = function (){
      console.log('here');
      return shoppingCartService.getList();
    };
  }

  function shoppingCartService()
  {
    this.item = [{'name':'Sugar', 'quantity':10}];
    this.getList = function()
    {
      return this.item;
    };

    this.addItem = function(item)
    {
      this.item.push(item);
    };
  }
})();
