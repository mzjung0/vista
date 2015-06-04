class Invoice < ActiveRecord::Base
  belongs_to :salesman
  belongs_to :customer

  def as_json(includes=nil)
    {
      id: id,
      invoice_number: invoice_number,
      salesman: {
        id: salesman_id,
        label: self.salesman ? self.salesman.salesman_name : "",
      },
      customer: {
        id: customer_id,
        label: self.customer ? self.customer.customer_name : "",
      },
      ship_to_code: ship_to_code,
      original_amount: original_amount,
      balance_amount: balance_amount,
      invoice_date: invoice_date,
      invoice_due_date: invoice_due_date,
      document_type: document_type,
      status: status
    }
  end
end
