class VansController < BaseController

  private
    def van_params
      params.require(:van).permit(:van_code, :van_type, :description, :load_limit_amount, :status)
    end

    def query_params
      params.permit(:van_code, :van_type, :description, :load_limit_amount, :status)
    end

end