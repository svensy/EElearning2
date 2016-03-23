class User < ActiveRecord::Base
  before_save -> { self.email = email.downcase }
  #validates :name,  presence: true, length: { maximum: 50 }
  validates :email, uniqueness: true

  has_secure_password
end
