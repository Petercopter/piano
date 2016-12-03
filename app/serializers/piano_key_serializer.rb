class PianoKeySerializer < ActiveModel::Serializer
  attributes :id

  has_many :pitches
end
