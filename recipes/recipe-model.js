const db = require("../data/config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipeId) {
    return db('recipes_instructions as ri')
      .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
      .where('ri.recipe_id', recipeId)
      .select('ingredients.ingredient_name', 'ri.quantity')
}

function getInstructions(recipeId) {
    return db('instructions as i')
    .where('i.recipe_id', recipeId)
    .select('i.step_number as Step', 'i.step as Instruction')
    .orderBy('i.step_number')
}