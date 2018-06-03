class Api::SearchController < ApplicationController

  def index
    @products = Product.top_twelve_results(search_params[:product_name])
    render 'api/products/index'
  end

  def search_params
    params.require(:search).permit(:product_name)
  end
end
