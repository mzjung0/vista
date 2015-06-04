class SignOutController < ApplicationController
  # GET /session/sign_out
  def index
    sign_out(user)
  end
end
