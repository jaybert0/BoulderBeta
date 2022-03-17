class CreateClimbproblems < ActiveRecord::Migration[6.1]
  def change
    create_table :climbproblems do |t|
      t.boolean :favorite
      t.boolean :in_progress
      t.string :feedback
      t.float :rating

      t.timestamps
    end
  end
end
