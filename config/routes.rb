Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :users [:index, :show, :create, :destroy, :update, :edit]
  end

  root 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
