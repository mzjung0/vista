class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :update, :delete, :read, :to => :rud
    alias_action :create, :update, :read, :to => :cru

    if user
      role = user.user_role
            
      if role
        if role.privileges
          role.privileges.each do |priv|
            # binding.pry
            can :read, priv[0].classify.constantize if priv[1]['view']
            can :create, priv[0].classify.constantize if priv[1]['create']
            can :update, priv[0].classify.constantize if priv[1]['update']
          end
        end
      end
    else
      cannot :manage, :all
    end
  end
end