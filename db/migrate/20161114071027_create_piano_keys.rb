class CreatePianoKeys < ActiveRecord::Migration[5.0]
  def change
    create_table :piano_keys do |t|
      t.timestamps
    end
  end
end
