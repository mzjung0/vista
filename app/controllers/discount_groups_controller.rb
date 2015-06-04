class DiscountGroupsController < BaseController

  private
    def discount_group_params
      params.require(:discount_group).permit(:discount_group_code, :discount, :status)
    end

    def query_params
      params.permit(:discount_group_code, :discount, :status)
    end

end