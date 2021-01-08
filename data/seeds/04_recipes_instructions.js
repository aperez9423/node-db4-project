
exports.seed = async function(knex) {
  await knex("recipes_instructions").insert([
    { recipe_id: 1, 
      ingredient_id: 2,
      quantity: 1
    },
    { recipe_id: 1, 
      ingredient_id: 3,
      quantity: 1
    },
    { recipe_id: 1, 
      ingredient_id: 4,
      quantity: 1
    },
    { recipe_id: 1, 
      ingredient_id: 6,
      quantity: 1
    },
    { recipe_id: 2, 
      ingredient_id: 9,
      quantity: 1
    },
    { recipe_id: 2, 
      ingredient_id: 11,
      quantity: 1
    },
    { recipe_id: 3, 
      ingredient_id: 7,
      quantity: 1
    },
    { recipe_id: 3, 
      ingredient_id: 8,
      quantity: 1
    },
  ])
};
