class PianoKeysScale < ApplicationRecord
  belongs_to :piano_key
  belongs_to :pitch
  belongs_to :scale, optional: true
end
