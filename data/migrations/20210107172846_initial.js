exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("recipe_name", 120).notNull().unique()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("ingredient_name", 120).notNull().unique()   
  })

  await knex.schema.createTable("instructions", (table) => {
      table.increments()
      table.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.integer("step_number")
        .unsigned()
        .notNullable()
      table.text("step", 300)
        .notNullable()
  })

  await knex.schema.createTable("recipes_instructions", (table) => {
      table.integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.integer("ingredient_id")
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.float("quantity", 100)
        .notNullable()
        .unsigned()
      table.primary(["recipe_id", "ingredient_id"])
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_instructions")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
