class StoretypesController < BaseController

  private
    def storetype_params
      params.require(:storetype).permit(:storetype_code, :storetype_name, :status)
    end

    def query_params
      params.permit(:storetype_code, :storetype_name, :status)
    end

end