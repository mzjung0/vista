class AreasController < BaseController
  private
    def area_params
      params.require(:area).permit(:id, :area_code, :area_name, :status)
    end

    def query_params
      params.permit(:area_code, :area_name, :status)
    end

end