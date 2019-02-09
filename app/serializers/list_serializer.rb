class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id

  belongs_to :user
  belongs_to :book
end
