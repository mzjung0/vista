class Item < ActiveRecord::Base
  belongs_to :item_brand
  belongs_to :item_segment
  belongs_to :item_brand

  def as_json(includes=nil)
    {
      id: id,
      item_code: item_code,
      description: description,
      description2: description2,
      item_segment: {        
        id: item_segment_id,
        label: self.item_segment ? self.item_segment.segment_code : ""
      },
      item_brand: {        
        id: item_brand_id,
        label: self.item_brand ? self.item_brand.brand_code : ""
      },
      status: status
    }
  end
end
