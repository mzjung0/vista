class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?

  def index    
    redirect_to after_sign_out_path_for(nil) unless signed_in?
    @current_user = current_user
  end
  
  protected

  def after_sign_out_path_for(resource_or_scope)
    '/users/sign_in'
  end

  def layout_by_resource
    if devise_controller?
      "users"
    else
      "application"
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :salesman_id
  end
end
