'use strict';

angular.module("nationalParks", ["ngRoute"])
.constant("FBUrl", "https://national-park-service.firebaseio.com/")
.config($routeProvider => {
    $routeProvider
    .when("/register", {
        templateUrl: "partials/registration.html",
        controller: "RegisterCtrl"
    })
    .when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    })
    .when("/forests", {
        templateUrl: "partials/forest-details.html",
        controller: "ForestDetailsCtrl"
    })
    .when("/forests/favorite", {
        templateUrl: "partials/forest-listing.html",
        controller: "ForestListingCtrl"
    })
    .when("/forest/:id", {
        templateUrl: "",
    })
    .otherwise("/login");
})
.run(FBCreds => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

