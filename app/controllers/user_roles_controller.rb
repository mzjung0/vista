class UserRolesController < BaseController
  
  private
    def user_role_params
      params.require(:user_role).permit(:role_name, {:privileges => 
        [
          :user_roles => [:create, :update, :delete, :view], 
          :users => [:create, :update, :delete, :view], 
          :areas => [:create, :update, :delete, :view], 
          :item_brands => [:create, :update, :delete, :view], 
          :customer_price_groups => [:create, :update, :delete, :view], 
          :customers => [:create, :update, :delete, :view], 
          :item_prices => [:create, :update, :delete, :view], 
          :item_segments => [:create, :update, :delete, :view], 
          :item_uoms => [:create, :update, :delete, :view], 
          :items => [:create, :update, :delete, :view], 
          :salesman_customers => [:create, :update, :delete, :view], 
          :salesmen => [:create, :update, :delete, :view], 
          :storetypes => [:create, :update, :delete, :view], 
          :uoms => [:create, :update, :delete, :view], 
          :vans => [:create, :update, :delete, :view], 
          :vat_postings => [:create, :update, :delete, :view], 
          :discount_groups => [:create, :update, :delete, :view], 
          :invoices => [:create, :update, :delete, :view]
        ]
      })
    end

    def query_params
      params.permit(:role_name, :privileges)
    end
end
