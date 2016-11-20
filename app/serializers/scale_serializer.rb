class ScaleSerializer < ActiveModel::Serializer
  attributes :id, :type

  belongs_to :note
  has_many :keys_scales, key: :keys

  class KeysScaleSerializer < ActiveModel::Serializer
    attribute(:id) { object.key.id }
    attribute(:name) { object.note.name }
    attribute(:offset) { object.key.offset }
    attributes :finger_left, :finger_right
  end
end
