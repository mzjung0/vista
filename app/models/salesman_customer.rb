class SalesmanCustomer < ActiveRecord::Base
  belongs_to :salesman
  belongs_to :customer

  def as_json(includes=nil)
    {
      id: id,
      salesman: {
        id: salesman_id,
        label: self.salesman ? self.salesman.id : "",
      },
      customer: {
        id: customer_id,
        label: self.customer ? self.customer.id : "",
      },
      status: status
    }
  end
end
