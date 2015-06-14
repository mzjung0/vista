class SearchController < ApplicationController

  def index
    @class = params[:class].classify.constantize    
    if params[:value] =~ /\*/i
      @needle = params[:value].gsub("*", "%")
    else      
      @needle = params[:value] + "%"
    end

    if params[:field] == "id"
      @results = @class.where("#{params[:field]} = (?)", "#{params[:value]}").first.as_json
    else
      @results = @class.where("#{params[:field]} ILIKE (?)", "#{@needle}").limit(20).as_json
    end
    render json: @results
  end
  
end