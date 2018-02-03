'use strict';

angular
.module("nationalParks")
.controller("ForestDetailsCtrl", function($scope, ForestFactory, $routeParams){
    
    ForestFactory.getForests().then(function(data){
				console.log("data", data);
                $scope.forestData= data.data;
                console.log($scope.forestData);
    }).catch(function(error){
        console.log("Error", error);
    });

    $scope.addToFavs = (key) =>{
        let favoriteForests = {
            forest: key,
            visitor: firebase.auth().currentUser.uid
        };
        console.log("Saved to user's favorites", key);
        ForestFactory.addNewForestFav(favoriteForests);
    };
    
});  

// $scope.saveItem = () => {
//     console.log('New Item to add', $scope.todoItem );
//     $scope.todoItem.uid = firebase.auth().currentUser.uid;
//     ItemFactory.addNewItem($scope.todoItem)
//     .then( (data) => {
//       $location.url("/items/list");
//     });
//   };