class ItemBrandsController < BaseController

  private
    def item_brand_params
      params.require(:item_brand).permit(:brand_code, :description, :status)
    end

    def query_params
      params.permit(:brand_code, :description, :status)
    end

end