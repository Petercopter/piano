class CreatePianoKeysScales < ActiveRecord::Migration[5.0]
  def change
    create_table :piano_keys_scales do |t|
      t.references :piano_key, foreign_key: true
      t.references :pitch, foreign_key: true
      t.references :scale, foreign_key: true
      t.integer :finger_left
      t.integer :finger_right

      t.timestamps
    end
  end
end
