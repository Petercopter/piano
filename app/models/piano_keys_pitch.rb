class PianoKeysPitch < ApplicationRecord
  belongs_to :piano_key
  belongs_to :pitch
end
