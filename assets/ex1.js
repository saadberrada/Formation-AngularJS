var app = angular.module('myApp', []);
app.controller('monControl', ['$scope', function($scope) {

//show a list
$scope.maVariable = 'TEST ANGULARJS' ;
var mesFruitsTab=["banane","pomme", "ananas","pêche","fraise"] ;
//$scope.mesFruits=mesFruitsTab;


//test check input
$scope.check =function() {
	if ($scope.checked){
		console.log("checked");
	}
	else{
		console.log("n checked");
	}
}

//show hide list image
$scope.visible=false;
$scope.affichage =function() {
	
	if ($scope.visible==false){
	$scope.visible=true;
	}
	else{
	$scope.visible=false;
	}

	console.log("TESTCLIK");
	$scope.names = [
	    {name:'SAAD',country:'Mroc',age:'18',image :'images/image1.jpg'},
	    {name:'MARK',country:'Sweden',age:'28'},
	    {name:'OLIA',country:'Denmarkk',age:'36'} 
	];
}


$scope.ajout =function() {
	if($scope.nom && $scope.country )
	{
		console.log($scope.nom);
		var ta = {name:$scope.nom,country:$scope.country};
		$scope.names.push(ta);
	}
}

$scope.clikImg =function() 
{
	console.log("TESTCLIK");
}

$scope.num = 2;
$scope.isNumber = angular.isNumber($scope.num);

  }]);


///test myApp2

angular.module('myApp2', []).controller('personCtrl', function($scope) {
    $scope.firstName = 'SAAD' ;
    $scope.lastName = 'BERRADA' ;
    $scope.adress = "NICE";
     $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };

maFiche={
	id : "7845",
	nom :"Durand",
	prenom :"Jean-Pierre",
	dateNaissance :"17/08/1967"
	}

$scope.infoPerso = maFiche;


});


