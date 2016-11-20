class KeysScale < ApplicationRecord
  belongs_to :key
  belongs_to :note
  belongs_to :scale, optional: true
end
