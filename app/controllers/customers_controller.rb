class CustomersController < BaseController

  private
    def customer_params
      params.require(:customer).permit(:customer_code, :area_id, :customer_name, :customer_name2, 
        :storetype_id, :vat_posting_id, :vat_ex_flag, :address_1, :address_2, :address_3, 
        :contact_name, :contact_num, :credit_limit, :discount_group_id, :warehouse_code, 
        :ship_to_code, :customer_price_group_id, :status)
    end

    def query_params
      params.permit(:customer_code, :area_id, :customer_name, :customer_name2, 
        :storetype_id, :vat_posting_id, :vat_ex_flag, :address_1, :address_2, :address_3, 
        :contact_name, :contact_num, :credit_limit, :discount_group_id, :warehouse_code, 
        :ship_to_code, :customer_price_group_id, :status)
    end

end