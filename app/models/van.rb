class Van < ActiveRecord::Base
  def as_json(includes=nil)
    {
      id: id,
      van_code: van_code,
      van_type: van_type,
      description: description,
      load_limit_amount: load_limit_amount,
      status: status
    }
  end
end
