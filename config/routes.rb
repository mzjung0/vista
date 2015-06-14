Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'application#index'

  devise_for :users, controllers: { registrations: "registrations" }

  get '/app' => 'application#index'
  get '/app/*path' => 'application#index'

  scope '/api', :defaults => { :format => 'json' } do
    resources :areas, :customer_price_groups, :customers, :discount_groups, :invoices, :item_brands, 
      :item_prices, :item_segments, :item_uoms, :items, :replenishment, :salesman_customers, :salesman_vans,
      :salesmen, :storetypes, :uoms, :users, :user_roles, :vans, :vat_postings, :replenishment_headers
    resources :search, only: [:index]
    resources :current_user, only: [:index]
    resources :audits, only: [:index]
  end
  
  match '/404', to: 'errors#not_found', via: :all
  match '/500', to: 'errors#error', via: :all

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
