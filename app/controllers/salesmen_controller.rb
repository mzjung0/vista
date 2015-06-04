class SalesmenController < BaseController

  private
    def salesman_params
      params.require(:salesman).permit(:salesman_code, :salesman_name, :status)
    end

    def query_params
      params.permit(:salesman_code, :salesman_name, :status)
    end

end