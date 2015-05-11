class CustomerPriceGroupsController < BaseController

  private
    def customer_price_group_params
      params.require(:customer_price_group).permit(:price_group_code, :paid_quantity, :free_quantity)
    end

    def query_params
      params.permit(:price_group_code, :paid_quantity, :free_quantity)
    end

end