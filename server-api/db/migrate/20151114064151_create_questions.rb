class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :name
      t.text :description
      t.string :category
      t.integer :point
      t.references :quiz, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
