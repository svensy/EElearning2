class QuizzesSerializer < ActiveModel::Serializer
  attributes :subject_id, :id, :name, :number_of_question
end
