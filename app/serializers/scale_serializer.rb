class ScaleSerializer < ActiveModel::Serializer
  attributes :id, :type

  belongs_to :note
  has_many :keys
end
