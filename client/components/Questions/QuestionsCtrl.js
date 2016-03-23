angular.module('QuizApp')
.controller('QuestionsCtrl', ['$scope', '$state', 'Notification', 'sharedData', 'QuestionsService', '$stateParams',
	function ($scope, $state, Notification, sharedData, QuestionsService, $stateParams) {

	QuestionsService.getByQuiz($stateParams.subject, $stateParams.quiz)
		.then ( function  (result) {
			$scope.questions = result.data;
			
		})


	$scope.checkTemplate = function (template, index) {
		if ($scope.questions[index].category == template) {
			return true;
		} else {
			return false;
		}
	}

	$scope.indexQuestion = 0;
	$scope.totalPoint = 0;
	


	$scope.currentQuestion = function (index) {
		if ($scope.indexQuestion != index) return false;
		else return true;
	}
	function updateUserPoint(point) {
		sharedData.set('point', point);
	}

	$scope.checked = function (index) {
		$scope.answer = index;
	}

	$scope.checkResult = function  (index) {

		$scope.questions[index].done = true;
		if (($scope.answer != null) && ($scope.questions[index].answers[$scope.answer].is_correct)) {
			var point = $scope.questions[index].point;
			$scope.totalPoint += point;
			updateUserPoint(point);
			Notification.success('CORRECT. +' + point + ' point');
		} else {
			Notification.error('NOT CORRECT');
		}

		if(index == $scope.questions.length - 1) {
			sharedData.set('isFinished', true);
			$('.ui.small.result.modal')
        	.modal('setting', 'transition', 'fade up')
  			.modal('show');
  			$state.go('home.leaderBoard');
		}

		$scope.indexQuestion = index+1;
	}

	$scope.checkCompleteWordResult = function(index) {

		$scope.questions[index].done = true;
		console.log(index + ' ' + $scope.questions[index].answerUser + ' ' + $scope.questions[index].answers[0].content);
		if ($scope.questions[index].answerUser == $scope.questions[index].answers[0].content) {
			var point = $scope.questions[index].point;
			$scope.totalPoint += point;
			updateUserPoint(point);
			Notification.success('CORRECT. +' + point + ' point');
		} else {
			Notification.error('NOT CORRECT');
		}

		if(index == $scope.questions.length - 1) {
			sharedData.set('isFinished', true);
			$('.ui.small.result.modal')
        	.modal('setting', 'transition', 'fade up')
  			.modal('show');
  			$state.go('home.leaderBoard');
		}

		$scope.indexQuestion = index+1;
	}

}])