class Scale < ApplicationRecord
  self.inheritance_column = :nil

  belongs_to :note
  has_many :notes_scales
  has_many :notes, through: :notes_scales
  has_many :keys, through: :notes

  validates :note, :notes, :type, presence: true

  enum type: [:major, :minor]
end
