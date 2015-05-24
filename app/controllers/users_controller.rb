class UsersController < BaseController
  
  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation,
        :name, :salesman_id, :user_role_id, :customer_price_group_id)
    end

    def query_params
      params.permit(:email, :name, :salesman_id, :user_role_id, :customer_price_group_id)
    end
end
