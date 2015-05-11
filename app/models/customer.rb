class Customer < ActiveRecord::Base
  belongs_to :area
  belongs_to :storetype
  belongs_to :vat_posting
  belongs_to :discount_group
  belongs_to :customer_price_group

  def as_json(includes=nil)
    {
      id: id,
      customer_code: customer_code,
      area: {
        id: area_id,
        label: self.area ? self.area.area_code : "",
      },
      customer_name: customer_name,
      customer_name2: customer_name2,
      storetype: {
        id: storetype_id,
        label: self.storetype ? self.storetype.storetype_code : "",
      },
      vat_posting: {
        id: vat_posting_id,
        label: self.vat_posting ? self.vat_posting.vat_posting_code : "",
      },
      vat_posting_id: vat_posting_id,
      vat_ex_flag: vat_ex_flag,
      address_1: address_1,
      address_2: address_2,
      address_3: address_3,
      contact_name: contact_name,
      contact_num: contact_num,
      credit_limit: credit_limit,
      discount_group: {
        id: discount_group_id,
        label: self.discount_group ? self.discount_group.discount_group_code : "",
      },
      discount_group_id: discount_group_id,
      warehouse_code: warehouse_code,
      ship_to_code: ship_to_code,
      customer_price_group: {
        id: customer_price_group_id,
        label: self.customer_price_group ? self.customer_price_group.price_group_code : "",
      },
      status: status
    }
  end
end
