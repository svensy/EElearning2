class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :description, :point, :category

  has_many :answers
end
