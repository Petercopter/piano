class Scale < ApplicationRecord
  self.inheritance_column = :nil

  belongs_to :note
  has_many :keys_scales
  has_many :keys, through: :keys_scales

  # validates :note, :notes, :type, presence: true

  enum type: [:major, :minor]

end
