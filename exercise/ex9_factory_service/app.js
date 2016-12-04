(function(){
  angular.module('myApp',[]).
    controller('shoppingController1',shoppingController1).
    controller('shoppingController2',shoppingController2).
    factory('shoppingCartFactory',shoppingCartFactory);

  shoppingController1.$inject=['shoppingCartFactory'];
  function shoppingController1(shoppingCartFactory)
  {
    var shoppingCart = new shoppingCartFactory();

    this.getList = function()
    {
      return shoppingCart.getItem();
    };

    this.addToCart = function()
    {
      shoppingCart.addItem(this.name, this.quan);
    };

    this.removeItem = function(index)
    {
      shoppingCart.removeItem(index);
    };
  }

  shoppingController2.$inject=['shoppingCartFactory'];
  function shoppingController2(shoppingCartFactory)
  {
    var shoppingCart = new shoppingCartFactory(4);

    this.getList = function()
    {
      return shoppingCart.getItem();
    };

    this.addToCart = function()
    {
      try{
        shoppingCart.addItem(this.name, this.quan);
      } catch(error)
      {
        this.error = error.message;
      }
    };

    this.removeItem = function(index)
    {
      shoppingCart.removeItem(index);
    };
  }

  function shoppingCartService(maxItems)
  {
    var items = [];

    this.addItem = function(name, quantity)
    {
      if (maxItems === undefined ||
            (items.length!==undefined) && (items.length<maxItems))
      {
        var item = {
          'name': name,
          'quantity':quantity
        };
        items.push(item);
      }
      else{
        throw new Error('Max Limit Reached. ');
      }
    };

    this.removeItem = function(index)
    {
      items.splice(index, 1);
    };

    this.getItem = function()
    {
      return items;
    };
  }

  function shoppingCartFactory(){
    var factory = function(maxItems)
    {
      return new shoppingCartService(maxItems);
    };
    return factory;
  }
})();
