class CreatePianoKeysPitches < ActiveRecord::Migration[5.0]
  def change
    create_table :piano_keys_pitches do |t|
      t.references :piano_key, foreign_key: true
      t.references :pitch, foreign_key: true

      t.timestamps
    end
  end
end
