(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message="";
  $scope.msgStyle="";
  $scope.inputStyle="";
  
  $scope.lunchCheck = function(){
  	var $msg = checkLunch($scope.lunch);
  	$scope.message = $msg;

  	if($scope.message == "Please enter data first"){
  		$scope.msgStyle = "red-msg";
  		$scope.inputStyle = "red-box";
  	}
  	else{
  		$scope.msgStyle = "green-msg";
  		$scope.inputStyle = "green-box";
  	}
  }

}

function checkLunch(string){
	
	if(string){

		var lunch_list = string.split(',');
		var lunch_menu = [];
		
		lunch_menu = lunch_list.filter(function(l) { return l.trim(); });
		
		if(lunch_menu.length == 0){
			return "Please enter data first";
		}
		else if(lunch_menu.length <= 3)
			{ return "Enjoy!"; }
		else
			{ return "Too Much!"; }
	}
	else
		{ return "Please enter data first"; }
	
}

})();
