class Scale < ApplicationRecord
  self.inheritance_column = :nil

  belongs_to :note

  has_many :notes_scales
  has_many :notes, through: :notes_scales

  enum type: [:major, :minor]

end
