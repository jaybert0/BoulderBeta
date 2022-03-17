class CreateProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |t|
      t.belongs_to :tech, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true
      t.string :grip_color
      t.date :end_date
      t.string :problem_description
      t.integer :difficulty
      t.float :rating

      t.timestamps
    end
  end
end
