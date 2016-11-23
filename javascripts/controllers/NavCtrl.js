"use strict";

app.controller("NavCtrl", ($scope) => {
    $scope.navItems = [{name:"Auth", url: "#/auth"},
    {name: "Logout", url: "#/logout"},
    {name:"All Items", url: "#/items/list"},
    {name:"New Item", url: "#/items/new"}];
});