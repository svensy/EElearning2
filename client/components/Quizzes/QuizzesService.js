angular.module('QuizApp')
	.factory('QuizzesService', function  ($http, api) {
		return {
			getBySubject: function(subjectID){
				return $http.get(api + '/subjects/' + subjectID + '/quizzes' )
			}
		}
	})