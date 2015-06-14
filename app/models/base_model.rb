class BaseModel < ActiveRecord::Base
  self.abstract_class = true

  after_save :test

  def test
    binding.pry
    p "hoy!"
  end
end
