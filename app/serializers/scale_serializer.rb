class ScaleSerializer < ActiveModel::Serializer
  attributes :id, :type

  belongs_to :pitch
  has_many :piano_keys_groups, key: :piano_keys

  class PianoKeysGroupSerializer < ActiveModel::Serializer
    attribute(:id) { object.piano_key.id }
    attribute(:name) { object.pitch.name }
    attributes :finger_left, :finger_right
  end
end
