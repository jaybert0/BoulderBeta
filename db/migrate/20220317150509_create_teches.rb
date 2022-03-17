class CreateTeches < ActiveRecord::Migration[6.1]
  def change
    create_table :teches do |t|
      t.string :handholds
      t.string :description
      t.belongs_to :problem, null: false, foreign_key: true

      t.timestamps
    end
  end
end
