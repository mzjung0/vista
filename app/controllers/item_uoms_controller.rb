class ItemUomsController < BaseController

  private
    def item_uom_params
      params.require(:item_uom).permit(:item_id, :uom_id, :unit_conversion, :status)
    end

    def query_params
      params.permit(:item_id, :uom_id, :unit_conversion, :status)
    end

end