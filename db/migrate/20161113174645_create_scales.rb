class CreateScales < ActiveRecord::Migration[5.0]
  def change
    create_table :scales do |t|
      t.integer :type
      t.references :note, foreign_key: true

      t.timestamps
    end
  end
end
