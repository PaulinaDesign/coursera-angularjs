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
        templateUrl: "src/menulist/templates/categories/html"
    });
}

})();