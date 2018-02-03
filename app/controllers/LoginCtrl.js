'use strict';

angular.module("nationalParks").controller("LoginCtrl", function ($scope, AuthFactory, FBCreds, $window) {

	$scope.login = () => {
		AuthFactory.loginUser($scope.account).then(user => {
			console.log("You have logged in.", user);
			$window.location.href = "#!/forests/favorite";
		})
			.catch((err) => {
				console.log(err);
			});
	};

});


