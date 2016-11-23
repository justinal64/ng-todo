"use strict";

app.run((FIREBASE_CONFIG) => {
     firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })
        .when('/items/list', {
            templateUrl: 'partials/item-list.html',
            controller: 'ItemListCtrl'
        })
        .when('/items/new', {
            templateUrl: 'partials/item-new.html',
            controller: 'ItemNewCtrl'
        })
        .when('/items/view/:id', { // colon means the value will change
            templateUrl: 'partials/item-view.html',
            controller: 'ItemViewCtrl'
        })
        .when('/items/edit/:id', {
            templateUrl: 'partials/item-new.html',
            controller: 'ItemEditCtrl'
        })
        .otherwise('/items/list'); // This could be a 404 error...

});