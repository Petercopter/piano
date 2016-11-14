class Note < ApplicationRecord
  has_many :keys_notes
  has_many :keys, through: :keys_notes

  has_many :notes_scales
  has_many :scales, through: :notes_scales
end
