class Api::ProductsController < ApplicationController
  def index
    allProducts = Product.all.shuffle
    @products = allProducts
    render 'api/products/index'
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find(params[:id])

    if @product.destroy
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find_by(id: params[:id])

    if @product.update(product_params)
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def product_params
    params.require(:product).permit(:product_name, :user_id, :overview, :description, :cost, :image_url)
  end
end
