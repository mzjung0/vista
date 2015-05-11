class UomsController < BaseController

  private
    def uom_params
      params.require(:uom).permit(:uom_code, :description, :status)
    end

    def query_params
      params.permit(:uom_code, :description, :status)
    end

end