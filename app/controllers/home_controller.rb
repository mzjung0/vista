class HomeController < ApplicationController
  def index
    @current_user = current_user

    session.destroy
  end
end
