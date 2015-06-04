class InvoicesController < BaseController

  private
    def invoice_params
      params.require(:invoice).permit(:invoice_number, :salesman_id, :customer_id, :ship_to_code, 
        :original_amount, :balance_amount, :invoice_date, :invoice_due_date, :document_type, :status)
    end

    def query_params
      params.permit(:invoice_number, :salesman_id, :customer_id, :ship_to_code, 
        :original_amount, :balance_amount, :invoice_date, :invoice_due_date, :document_type, :status)
    end

end