angular.module('QuizApp')
	.controller('LoginCtrl', ['$http', '$scope', '$state', 'Auth', 'Notification', function($http, $scope, $state, Auth, Notification){
		$scope.login = function () {
			Auth.login($scope.user)
				.then(function(){
					$state.reload()
					Notification.success("Login successfully")
				});


		$('.ui.small.login.modal')
			.modal('hide');
		}

	}])