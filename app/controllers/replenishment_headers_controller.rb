class ReplenishmentHeadersController < BaseController

  def create
    replenishment = Replenishments::ReplenishmentCreator.new(replenishment_header_params).do

    if replenishment
      render :json => replenishment.as_json
    else
      render :status => 500, :json => {
        status: "CREATE_ERROR",
        message: "An error occurred during save"
      }
    end
  end

  private
    def replenishment_header_params
      params.require(:replenishment_header).permit(:reference_number, :van_id, :replenishment_date, 
        {:details => [:replenishment_header_id, :item_id, :uom_id, :quantity]})
    end

    def query_params
      params.permit(:reference_number, :van_id, :replenishment_date)
    end

end