class SalesmanCustomersController < BaseController

  private
    def salesman_customer_params
      params.require(:salesman_customer).permit(:salesman_id, :customer_id, :ship_to_code, :status)
    end

    def query_params
      params.permit(:salesman_id, :customer_id, :ship_to_code, :status)
    end

end