class ItemPrice < ActiveRecord::Base
  belongs_to :item
  belongs_to :uom
  belongs_to :customer_price_group

  def as_json(includes=nil)
    {      
      id: id,
      item: {
        id: item_id,
        label: self.item ? self.item.item_code : "",
      },
      uom: {
        id: uom_id,
        label: self.uom ? self.uom.uom_code : "",
      },
      customer_price_group: {
        id: customer_price_group_id,
        label: self.customer_price_group ? self.customer_price_group.price_group_code : "",
      },
      unit_price: unit_price,
      status: status,
      effective_date_from: effective_date_from,
      effective_date_to: effective_date_to
    }
  end
end
