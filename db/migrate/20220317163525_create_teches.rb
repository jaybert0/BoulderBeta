class CreateTeches < ActiveRecord::Migration[6.1]
  def change
    create_table :teches do |t|
      t.string :handholds
      t.string :hold_description

      t.timestamps
    end
  end
end
