(function () {
'use strict';

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    //Redirect to homepage if no other URL matches
    $urlRouterProvider.otherwise("/");

    //Setting up UI states
    $stateProvider
    .state("home", {
        url: "/",
        templateUrl: "src/menulist/templates/home.html"
    })
    .state("categories", {
        url: "/categories",
        templateUrl: "src/menulist/templates/categories.html",
        controller: "MenuCategoriesController as categories",
        resolve: {
            categories: ["MenuDataService", function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state("items", {
        url: "/categories/item",
        templateUrl: "src/menulist/templates/categories.html",
        controller: "MenuCategoriesController as items",
        resolve: {
            items: ["MenuDataService", function(MenuDataService) {
                return MenuDataService.getItemsForCategory(categoryShortName);
            }]
        }
    });
}

})();