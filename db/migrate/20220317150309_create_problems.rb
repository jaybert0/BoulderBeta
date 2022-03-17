class CreateProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :difficulty
      t.string :grip_color
      t.date :end_date

      t.timestamps
    end
  end
end
