class ItemPricesController < BaseController

  private
    def item_price_params
      params.require(:item_price).permit(:item_id, :customer_price_group_id, :uom_id, 
        :unit_price, :status, :effective_date_from, :effective_date_to)
    end

    def query_params
      params.permit(:item_id, :customer_price_group_id, :uom_id, :unit_price, 
        :status, :effective_date_from, :effective_date_to)
    end

end