class SearchController < ApplicationController

  def index
    @class = params[:class].classify.constantize    
    if params[:value] =~ /\*/i
      @needle = params[:value].gsub("*", "%")
    else      
      @needle = params[:value] + "%"
    end

    @results = @class.where("#{params[:field]} ILIKE (?)", "#{@needle}").limit(20).as_json
    render json: @results
  end
  
end