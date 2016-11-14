class Note < ApplicationRecord
  has_many :names
  has_many :notes_scales
  has_many :scales, through: :notes_scales
end
