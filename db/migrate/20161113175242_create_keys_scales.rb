class CreateKeysScales < ActiveRecord::Migration[5.0]
  def change
    create_table :keys_scales do |t|
      t.references :key, foreign_key: true
      t.references :note, foreign_key: true
      t.references :scale, foreign_key: true
      t.integer :finger_left
      t.integer :finger_right

      t.timestamps
    end
  end
end
