angular.module('QuizApp')
.controller('leaderBoardCtrl', ['$scope', 'httpRequest', function ($scope, httpRequest) {
	httpRequest.get('/users', null).then(function(result) {
		$scope.users = result.data;
	})
}])