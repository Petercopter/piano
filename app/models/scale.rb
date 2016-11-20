class Scale < ApplicationRecord
  self.inheritance_column = :nil

  belongs_to :note
  has_many :keys_scales
  has_many :keys, through: :keys_scales
  has_many :notes, through: :keys_scales

  enum type: [:major, :minor]

  accepts_nested_attributes_for :keys_scales, reject_if: :all_blank, allow_destroy: true

end
