class ReplenishmentDetail < ActiveRecord::Base
  belongs_to :replenishment_header
  belongs_to :uom
  belongs_to :item

  def as_json(includes=nil)
    {
      id: id,      
      replenishment_header_id: replenishment_header_id,
      item: {
        id: item_id,
        label: self.item ? self.item.item_code : ""
      },
      # this should be just uom, not item_uom
      uom: {
        id: uom_id,
        label: self.uom ? self.uom.uom_code : "",
      },
      quantity: quantity
    }
  end
end
