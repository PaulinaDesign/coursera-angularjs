(function() {
'use strict';

angular.module("data")
.service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http"];
function MenuDataService($http) {
    var service = this;

    service.getAllCategories = () => {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/categories.json"
        }).then(response => response.data);
    };

    service.getItemsForCategory = (categoryShortName) => {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json?category={categoryShortName}"
        }).then(response => response.data);
    };
}

})();