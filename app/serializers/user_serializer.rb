class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :lists
  has_many :books, through: :lists
end
