class SignOutController < ApplicationController
  # GET /session/sign_out
  def index
    binding.pry
    sign_out(user)
  end
end
