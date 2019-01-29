class Book < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :users, through: :lists
end
