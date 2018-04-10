class Api::ShoppingCartItemsController < ApplicationController
  def index
    @shopping_cart_items = ShoppingCartItem.where(user_id: params[:user_id])
    render 'api/shopping_cart_items/index'
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
  end

  def create
    @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)

    if @shopping_cart_item.save
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])

    if @shopping_cart_item.destroy
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def update
    @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])

    if @shopping_cart_item.update(shopping_cart_item_params)
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def shopping_cart_item_params
    params.require(:shopping_cart_item).permit(:user_id, :product_id, :quantity)
  end
end
