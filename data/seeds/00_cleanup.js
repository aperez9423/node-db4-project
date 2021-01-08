
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipes_instructions").truncate()
  await knex("instructions").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};
