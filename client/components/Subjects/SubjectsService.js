angular.module('QuizApp')
	.factory('SubjectService', function($http, api){
		return {
			getAll: function(){
				return $http.get(api+'/subjects')
			}
		}
	})