'use strict';

angular.module("nationalParks").factory("ForestFactory", function($q, $http, FBUrl){

	let getForests = () => {
		return $q(function (resolve, reject) {
			$http.get(`${FBUrl}/forests.json`)
				.then(function (data) {
					resolve(data);
				})
				.catch(function (error) {
					reject(error);
				});
		});
	};

	function addNewForestFav(userForests){
		return $q( (resolve, reject) => {
			$http
				.post(`${FBUrl}/visitor_favorites.json`, JSON.stringify(userForests))
				.then(data => {
					console.log("User Favorite Posted", data.data.name);
					resolve(data.data);
				})
				.catch(error => {
					console.log("Get outta here");
					reject(error);
				});
		});
	}
	

	return { getForests, addNewForestFav };

});
