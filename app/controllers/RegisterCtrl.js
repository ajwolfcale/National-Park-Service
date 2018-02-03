'use strict';

angular
.module("nationalParks")
.controller("RegisterCtrl", function($scope, FBCreds, AuthFactory, $window){

    $scope.register = () => {
        AuthFactory.createUser($scope.account).then(user => {
          console.log("You have created a new user", user);
          // $scope.login(); this should auto-login....
          $window.location.href = "#!/login";
        })
        .catch(function({code, message}) {
          console.log("Who are you? You are not welcome.", code, message);
        });
      };
      
});