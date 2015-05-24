class ItemUom < ActiveRecord::Base
  belongs_to :item
  belongs_to :uom

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
      unit_conversion: unit_conversion,
      status: status
    }
  end
end
