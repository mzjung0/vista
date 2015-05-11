class SalesmanVansController < BaseController

  private
    def salesman_van_params
      params.require(:salesman_van).permit(:salesman_id, :van_id, :status)
    end

    def query_params
      params.permit(:salesman_id, :van_id, :status)
    end

end