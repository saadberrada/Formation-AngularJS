var myapp = angular.module('myApp', []);

myapp.controller('monControl', function($scope,$http) {

	$scope.maVariable="test node js !";

	$scope.affichage=function(){ 
		$http.get('/api/affiche') 
		 .then(function (succes){ 
		 	console.log(succes);
			$scope.listePerso=succes.data; 
		},function (error){
     	});
	}

	$scope.traitForm=function(){ 
		$http.post('/api/formulaire',$scope.perso) 
		 .then(function (succes){ 
		 	console.log(succes);
			$scope.posterso={}; 
			$scope.affiche(); 
		});
	} 
	$scope.affichage();
	

});






