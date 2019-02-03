class Book < ApplicationRecord
  has_many :lists, dependent: :destroy
  has_many :users, through: :lists

  validates :title, :author, :description, :image_url, presence: true
end
