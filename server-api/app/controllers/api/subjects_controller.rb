class Api::SubjectsController < ApplicationController
  before_action :set_subject, only: [:show, :update, :destroy]
  skip_before_filter :authenticate
  # GET /subjects
  # GET /subjects.json
  def index
    @subjects = Subject.all

    render json: @subjects
  end

  # GET /subjects/1
  # GET /subjects/1.json
  def show
    render json: @subject
  end

  # POST /subjects
  # POST /subjects.json
  def create
    @subject = Subject.new(subject_params)

    if @subject.save
      render json: @subject, status: :created
    else
      render json: @subject.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subjects/1
  # PATCH/PUT /subjects/1.json
  def update
    @subject = Subject.find(params[:id])

    if @subject.update(subject_params)
      head :no_content
    else
      render json: @subject.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subjects/1
  # DELETE /subjects/1.json
  def destroy
    @subject.destroy

    head :no_content
  end

  private

    def set_subject
      @subject = Subject.find(params[:id])
    end

    def subject_params
      params.require(:subject).permit(:title)
    end
end
