class ScaleSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :note
  has_many :keys
end
