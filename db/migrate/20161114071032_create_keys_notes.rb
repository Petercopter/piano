class CreateKeysNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :keys_notes do |t|
      t.references :key, foreign_key: true
      t.references :note, foreign_key: true

      t.timestamps
    end
  end
end
