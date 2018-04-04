class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
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
    params.require(:user).permit(:username, :password, :email, :image_url)
  end
end
