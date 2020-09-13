(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItems);

function FoundItems() {
    var ddo = {

    };

    return ddo;
}

NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController (MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    /*found.then(

    );*/

}

MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = (searchTerm) => {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(
            function success(response) {
                //LOOP THROUGH ITEMS AND PICK WHAT MATCHES SEARCH
                let foundItems = response.data;
                
                console.log(response.data);
                return foundItems;
            },
            function error(response) {
                console.log("Ajajai, this is an error!");
            }
        );
    };

}

})();