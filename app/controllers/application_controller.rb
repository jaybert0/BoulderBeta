class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize
  
  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end

  private

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response(error)
    render json: { error: "#{error.model} not found" }, status: :not_found
  end

end