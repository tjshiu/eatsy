class Api::UsersController < ApplicationController
  def show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
    render 'api/users/new'
  end

  def destroy
  end

  def update
  end

  def edit
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image_url)
  end
end
