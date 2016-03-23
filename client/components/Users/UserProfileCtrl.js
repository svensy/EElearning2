angular.module('QuizApp')
.controller('UserProfileCtrl', ['$scope', 'CurrentUser', 'sharedData', 'httpRequest', 'LocalService',
 function ($scope, CurrentUser, sharedData, httpRequest, LocalService){
	$scope.currentUser = CurrentUser.user();
	
	$scope.$on('pointBroadcast', function() {
		if($scope.currentUser) {
			$scope.currentUser.point += sharedData.get('point');
		}
	});

	$scope.$on('isFinishedBroadcast', function() {
		if($scope.currentUser) {
			if(sharedData.get('isFinished')) {
				httpRequest.update('/users', $scope.currentUser).success(function(result) {
					LocalService.set(JSON.stringify({user: $scope.currentUser, token: CurrentUser.getToken()}));
				})
			}
		}
	});
}])