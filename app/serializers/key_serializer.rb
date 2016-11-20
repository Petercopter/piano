class KeySerializer < ActiveModel::Serializer
  attributes :id

  has_many :notes
end
