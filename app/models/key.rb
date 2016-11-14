class Key < ApplicationRecord
  has_many :keys_notes
  has_many :notes, through: :keys_notes
end
