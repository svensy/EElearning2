class Api::QuestionsController < ApplicationController
  before_action :current_quiz
  skip_before_filter :authenticate

  def index
    @questions = @current_quiz.questions
    

    render json: @questions
  end


private 
  def current_quiz
    @current_quiz = Quiz.find(params[:quiz_id])
  end

  def quiz_params
    params.require(:question).permit(:description, :category)
  end
end