class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }
  before_filter :authenticate

private 

  def authenticate

    begin
      token = request.headers['Authorization'].split(' ').last
      
      payload, header = AuthToken.valid?(token)
  
      @current_user = User.find_by(id: payload['user_id'])

    rescue
      render json: { error: 'Authorization header not valid'}, status: :unauthorized
    end
  end

  def default_serializer_options
    { root: false }
  end


end
