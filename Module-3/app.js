(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItems);


function FoundItems() {
    var ddo = {
        restrict: "E",
        templateUrl: "menuList.html",
        scope: {
            foundItems: "<",
            onRemove: "&"
        }
    };
    return ddo;
}


NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.searchTerm = "";

    menu.getMatchedMenuItems = () => {
	  if (menu.searchTerm !== ""){
        return MenuSearchService.getMatchedMenuItems(menu.searchTerm)
            .then(response => {
                menu.found = response;
            })
            .catch(function (error) {
                console.log(error);
            });
      }
      else {
        return menu.found = [];
	  }
    };
    
    menu.removeItem = (index) => {
        menu.found.splice(index, 1);
    };
}


MenuSearchService.$inject = ["$http"];
function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = (searchTerm) =>{
        return $http({
                    method: "GET",
                    url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                }).then(response => {
                    let foundItems = [];
                    response.data.menu_items.forEach(item => {
                        if (item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            foundItems.push(item);
                        }
                    });
                    return foundItems;
                });
    };
}

})();