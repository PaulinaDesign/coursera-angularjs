(function() {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", foundItems);


NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController (MenuSearchService) {
    var controller = this;
    
    controller.found = getMatchedMenuItems(searchTerm);
    

}

function MenuSearchService() {
    var getMatchedMenuItems = (searchTerm) => {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(
            function success(response) {
                //LOOP THROUGH ITEMS AND PICK WHAT MATCHES SEARCH
                let foundItems = [];
                
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