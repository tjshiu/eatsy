Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :new, :destroy, :update, :edit]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :show, :destroy, :update, :index]
    resources :shopping_cart_items, only: [:create, :show, :destroy, :update, :index] do
      delete "delete_collection", on: :collection
    end
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
