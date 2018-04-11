class Api::ShoppingCartItemsController < ApplicationController
  def index
    if params[:user_id]
      @shopping_cart_items = ShoppingCartItem.where(user_id: params[:user_id])
    else
      @shopping_cart_items = ShoppingCartItem.all
    end
    @current_user = current_user
    render 'api/shopping_cart_items/index'
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
    @current_user = current_user
  end

  def create
    @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
    @current_user = current_user

    if @shopping_cart_item.save
      render 'api/shopping_cart_items/show'
    else
      render json: ['Sorry you must be signed in to Add to Cart'], status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    @current_user = current_user

    if @shopping_cart_item.destroy
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def delete_collection
    cartIds = params[:cartIds]

    cartIds.each do |cartId|
      item = ShoppingCartItem.find(cartId)
      item.destroy
    end

    render json: {}
  end

  def update
    @shopping_cart_item = ShoppingCartItem.find_by(id: params[:id])
    @current_user = current_user

    if @shopping_cart_item.update(shopping_cart_item_params)
      render 'api/shopping_cart_items/show'
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def shopping_cart_item_params
    params.require(:shoppingCartItem).permit(:user_id, :product_id, :quantity)
  end
end
