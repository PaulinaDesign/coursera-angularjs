(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
    $scope.givenFoods = "";
    $scope.resultMessage = "";

    $scope.checkHowMuch = function() {
        var foodArray = $scope.givenFoods.split(",");
        if (foodArray == "") {
            return $scope.resultMessage = "Please enter data first";
        }
        else if (foodArray.length < 4) {
            return $scope.resultMessage = "Enjoy!";
        }
        else {
            return $scope.resultMessage = "Too much!";
        }
    };
}

})();