(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getToBuyItems();

  tobuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.checkoffItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadybought = this;

  alreadybought.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {

  var service = this;

  // List of to buy items
  var tobuyitems = [
    { name:"Cookies", quantity :"3" },
    { name:"Milk", quantity:"2" },
    { name:"Water", quantity:"1" },
    { name:"Cake", quantity:"1" },
    { name:"Carrots", quantity:"2" },
    { name:"Apples", quantity:"5" }
  ];

  // List of bought items
  var boughtitems = [];

  service.checkoffItem = function (itemIdex) {
    boughtitems.push(tobuyitems[itemIdex]);
    tobuyitems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return tobuyitems;
  };

  service.getBoughtItems = function () {
    return boughtitems;
  };
}


})();
