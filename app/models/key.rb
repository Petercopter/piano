class Key < ApplicationRecord
  has_many :keys_notes
  has_many :notes, through: :keys_notes
  has_many :keys_scales
  has_many :scales, through: :keys_scales
end
