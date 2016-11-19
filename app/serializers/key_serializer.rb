class KeySerializer < ActiveModel::Serializer
  attributes :id, :offset

  has_many :notes
end
