class CurrentUserController < BaseController
  
  def index
    render status: 200, json: current_user
  end
end
