class PianoKey < ApplicationRecord
  has_many :piano_keys_pitches
  has_many :pitches, through: :piano_keys_pitches
  has_many :piano_keys_scales
  has_many :scales, through: :piano_keys_scales
end
