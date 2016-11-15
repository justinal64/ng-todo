"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
    $scope.navItems = [{name: "Logout"}, {name:"All Items"}, {name:"New Item"}];
});


app.controller("TodoCtrl", ($scope) => {
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.items = [
        {
            id: 0,
            task: "mow the lawn",
            isCompleted: true,
            assignedTo: "Zoe"
        },
        {
            id: 1,
            task: "mow the grass",
            isCompleted: false,
            assignedTo: "Justin"
        },
        {
            id: 2,
            task: "clean the house",
            isCompleted: false,
            assignedTo: "Katie"
        }
    ];

    $scope.allItems = () => {
        $scope.showListView = true;
    };

    $scope.newItem = () => {
        $scope.showListView = false;
    };

});
