angular.module('QuizApp')
	.controller('SubjectCtrl', function($scope, SubjectService){
	  SubjectService.getAll()
	  	.then(function (result) {
	  		$scope.subjects = result.data;
	  
	  	})

		
	})