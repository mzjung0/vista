class ReplenishmentController < BaseController

  private
    def replenishment_params
      params.require(:replenishment).permit(:reference_number, :van_id, :replenishment_date, 
        {:details => [:txn_replenishment_header_id, :item_id, :item_uom_id, :quantity]})
    end

    def query_params
      params.permit(:reference_number, :van_id, :replenishment_date)
    end

end