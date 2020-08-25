(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);


ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.toBuyItems = ShoppingListCheckOffService.getList1();
    
    toBuyList.buyItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
    };
}


AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.boughtItems = ShoppingListCheckOffService.getList2();
}


function ShoppingListCheckOffService() {
    var service = this;

    var foodToBuy = [
        {item: "cucumbers", quantity: 6},
        {item: "tomatoes", quantity: 5},
        {item: "pears", quantity: 4},
        {item: "oranges", quantity: 3},
        {item: "bannanas", quantity: 2},
        {item: "apple", quantity: 1},
    ];

    var foodBought = [];

    service.getList1 = function() {
        return foodToBuy;
    };

    service.getList2 = function() {
        return foodBought;
    };

    service.buyItem = function(index) {
        var groceryItem = foodToBuy[index];

        foodToBuy.splice(index, 1);
        foodBought.push(groceryItem);
    };
}

})();