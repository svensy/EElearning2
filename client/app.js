
angular.module('QuizApp', ['ui.router', 'ui-notification'])
	.constant('api', 'http://localhost:3000/api/v1')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		'NotificationProvider',
		function ($stateProvider, $urlRouterProvider, NotificationProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					views: {
						'aside': {
							templateUrl: 'components/Users/user_profile.html',
							controller: 'UserProfileCtrl',
						}
					}
				})

				.state('home.subjects', {
					url: 'subjects',
					views: {
						'content@': {
							templateUrl: 'components/Subjects/Sub.html',
							controller: 'SubjectCtrl'
						}
					}
				})

				.state('home.quizzes', {
					url: '/subjects/:subject',
					views: {
						'content@' : {
							templateUrl: 'components/Quizzes/quizzes.html',
							controller: 'QuizzesCtrl'
						}
					}
				})

				.state('home.quizzes.questions', {
					url: '/quizzes/:quiz',
					views: {
						'content@': {
							templateUrl: 'components/Questions/questions.html',
							controller: 'QuestionsCtrl'
							
						}
					}
				})

				.state('home.leaderBoard', {
					url: 'leaderBoard',
					views: {
						'content@': {
							templateUrl: 'components/LeaderBoard/_leaderBoard.html',
							controller: 'leaderBoardCtrl'
						}
					}
				})

			$urlRouterProvider.otherwise('/subjects');	
			NotificationProvider.setOptions({
				positionX: 'center',
          		positionY: 'top'
			})
		}
	])

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '848349415286409',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));