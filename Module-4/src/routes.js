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
        controller: "MenuCategoriesController as categoriesCtrl",
        resolve: {
            categories: ["MenuDataService", function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state("items", {
        url: "/categories/{categoryShortName}",
        templateUrl: "src/menulist/templates/categories.html",
        controller: "MenuCategoriesController as itemsCtrl",
        params: {
            categoryShortName: null,
            categoryName: null
        },
        resolve: {
            items: ["$stateParams", "MenuDataService", 
                function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    });
}

})();