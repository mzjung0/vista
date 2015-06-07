class Replenishments::ReplenishmentCreator
  @replenishment = nil

  def initialize(params)
    @replenishment = params
  end

  def do
    rep = ReplenishmentHeader.new
    ReplenishmentHeader.transaction do
      rep.reference_number = @replenishment[:reference_number]
      rep.van_id = @replenishment[:van_id]
      rep.replenishment_date = @replenishment[:replenishment_date]
      rep.save

      binding.pry
      @replenishment[:details].each do |detail|
        rep_detail = ReplenishmentDetail.new
        rep_detail.replenishment_header_id = rep.id
        rep_detail.quantity = detail[:quantity]
        rep_detail.item_id = detail[:item_id]
        rep_detail.uom_id = detail[:uom_id]
        rep_detail.save
      end
    end

    rep
  end
end