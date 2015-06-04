class VatPostingsController < BaseController

  private
    def vat_posting_params
      params.require(:vat_posting).permit(:vat_posting_code, :vat_posting_name, :vat_posting_rate, :status)
    end

    def query_params
      params.permit(:vat_posting_code, :vat_posting_name, :vat_posting_rate, :status)
    end

end