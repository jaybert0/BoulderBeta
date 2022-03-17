class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.integer :location
      t.string :loc_description

      t.timestamps
    end
  end
end
