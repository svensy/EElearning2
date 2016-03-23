angular.module('QuizApp')
.controller('FacebookCtrl', function ($scope, Auth, Notification, $state) {
	$scope.user = {}
	$scope.fbLogin = function() {
		FB.login(function(response) {
			if (response.status === 'connected') {
	    	FB.api('/me', {
	    		 fields: 'picture, email, name'
	    	}, function (response) {
	    		$scope.user.email = response.email
	    		$scope.user.password = response.id
		    	Auth.login($scope.user)
						.then(function(){
							$state.reload();
							Notification.success("Login successfully");
						}, function() {
								$scope.user.name = response.name

								$scope.user.password_confirmation = response.id
								Auth.register($scope.user)
									.then(function(){
										$state.reload();
										Notification.success("Register successfully");
									});							
						});
					$('.ui.small.login.modal')
							.modal('hide');	
	    	})
	  } else if (response.status === 'not_authorized') {
	    // The person is logged into Facebook, but not your app.
	  } else {
	    // The person is not logged into Facebook, so we're not sure if
	    // they are logged into this app or not.
	  }
	}, {scope: 'public_profile,email'})};
})