class User < ActiveRecord::Base
  belongs_to :salesman
  belongs_to :user_role

  validates :email, uniqueness: { case_sensitive: false, strict: true }
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def as_json(includes=nil)
    {
      id: id,
      email: email,
      name: name,
      user_role: {
        id: user_role_id,
        label: self.user_role ? self.user_role.id : ""
      },
      salesman: {
        id: salesman_id,
        label: self.salesman ? self.salesman.salesman_code : ""
      },
    }
  end
end
