class CreateCates < ActiveRecord::Migration[5.1]
  def change
    create_table :cates do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
