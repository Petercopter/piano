class CreateNotesScales < ActiveRecord::Migration[5.0]
  def change
    create_table :notes_scales do |t|
      t.references :note, foreign_key: true
      t.references :scale, foreign_key: true

      t.timestamps
    end
  end
end
