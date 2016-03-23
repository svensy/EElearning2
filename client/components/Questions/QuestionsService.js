angular.module('QuizApp')
	.factory('QuestionsService', function($http, api) {
		return {
			getByQuiz: function (subjectID, quizID) {
				return $http.get(api + '/subjects/' + subjectID + '/quizzes/' + quizID + '/questions')
			}
		}
	})