class User < ApplicationRecord
  has_secure_password
  
  has_many :lists, dependent: :destroy
  has_many :books, through: :lists
end
