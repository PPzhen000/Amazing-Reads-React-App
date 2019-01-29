class User < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :books, through: :lists
end
