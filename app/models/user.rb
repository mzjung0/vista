class User < ActiveRecord::Base
  belongs_to :salesman
  belongs_to :user_role
  belongs_to :customer_price_group

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def some_value
    return "yahoo!"
  end
end
