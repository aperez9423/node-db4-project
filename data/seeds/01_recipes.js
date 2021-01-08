exports.seed = async function(knex) {
  await knex("recipes").insert([
    { recipe_name: "Spanish Beans" },
    { recipe_name: "Pepperoni Pizza" },
    { recipe_name: "Pasta" },
  ])
};
