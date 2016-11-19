class CreateKeysScales < ActiveRecord::Migration[5.0]
  def change
    create_table :keys_scales do |t|
      t.references :key, foreign_key: true
      t.references :scale, foreign_key: true

      t.timestamps
    end
  end
end
