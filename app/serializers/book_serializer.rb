class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :image_url

  has_many :lists
  has_many :users, through: :lists
end
