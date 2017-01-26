class Group < ApplicationRecord

  belongs_to :pitch
  has_many :piano_keys_groups
  has_many :piano_keys, through: :piano_keys_groups
  has_many :pitches, through: :piano_keys_groups

  accepts_nested_attributes_for :piano_keys_groups, reject_if: :all_blank, allow_destroy: true

end
