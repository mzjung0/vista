class ItemsController < BaseController

  private
    def item_params
      params.require(:item).permit(:item_code, :description, :description2, :item_segment_id, :item_brand_id, :status)
    end

    def query_params
      params.permit(:item_code, :description, :description2, :item_segment_id, :item_brand_id, :status)
    end

end