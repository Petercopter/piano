class Note < ApplicationRecord
  self.inheritance_column = :nil

  has_many :names
  has_many :notes_scales
  has_many :scales, through: :notes_scales

  enum type: [:natural, :sharp, :flat]
end
