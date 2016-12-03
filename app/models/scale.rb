class Scale < ApplicationRecord
  self.inheritance_column = :nil

  belongs_to :pitch
  has_many :piano_keys_scales
  has_many :piano_keys, through: :piano_keys_scales
  has_many :pitches, through: :piano_keys_scales

  enum type: [:major, :minor]

  accepts_nested_attributes_for :piano_keys_scales, reject_if: :all_blank, allow_destroy: true

end
