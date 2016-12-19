
angular.module('myApp', []).controller('monControl', function($scope) {
   
//show a list
$scope.maVariable = 'TESTA' ;
var mesFruitsTab=["banane","pomme", "ananas","pêche","fraise"] ;
//$scope.mesFruits=mesFruitsTab;


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
    {name:'Jani',country:'Norway',image :'images/image1.jpg'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
];
}

$scope.ajout =function() {
	if($scope.myname)
	{
		console.log($scope.myname);
		var ta = {name:$scope.myname,country:'Sweden'};
		$scope.names.push(ta);

	}
	

}


$scope.clikImg =function() 
{
	console.log("TESTCLIK");
}


});



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