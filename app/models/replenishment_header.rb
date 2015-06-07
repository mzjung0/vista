class ReplenishmentHeader < ActiveRecord::Base
  belongs_to :van
  has_many :replenishment_details

  def as_json(includes=nil)
    {
      id: id,
      reference_number: reference_number,
      van: {        
        id: van_id,
        label: self.van ? self.van.van_code : "",
      },
      replenishment_date: replenishment_date,
      details: self.replenishment_details
    }
  end
end
