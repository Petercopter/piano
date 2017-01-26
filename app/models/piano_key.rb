class PianoKey < ApplicationRecord
  has_many :piano_keys_pitches
  has_many :pitches, through: :piano_keys_pitches
  has_many :piano_keys_groups
  has_many :groups, through: :piano_keys_groups
end
