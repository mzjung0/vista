class ItemsController < BaseController

  def not_found
    render text: "Not found"
  end

  def error
    render text: "Error"
  end

end