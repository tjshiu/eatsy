class Api::ProductsController < ApplicationController
  def index
    @products = Products.all
    render 'api/products/index'
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render 'api/producs/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def new
    @product = Product.new
    render 'api/products/new'
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to 'api/products/index'
  end

  def update
    @product = Product.find_by(id: params[:id])
  end

  def edit
    @product = Product.find(params[:id])
  end

  def product_params
    params.requrie(:product).permit(:product_name, :overview, :description, :cost)
  end
end
