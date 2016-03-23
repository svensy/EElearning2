angular.module('QuizApp')
	.controller('QuizzesCtrl', function ($scope, $stateParams, QuizzesService) {
		QuizzesService.getBySubject($stateParams.subject)
			.then(function  (result) {
				console.log(result)
				$scope.quizzes = result.data;
			})

})