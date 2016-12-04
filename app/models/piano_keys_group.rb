class PianoKeysGroup < ApplicationRecord
  belongs_to :piano_key
  belongs_to :pitch
  belongs_to :group, optional: true
end
