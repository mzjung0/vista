class ItemSegmentsController < BaseController

  private
    def item_segment_params
      params.require(:item_segment).permit(:segment_code, :description, :status)
    end

    def query_params
      params.permit(:segment_code, :description, :status)
    end

end