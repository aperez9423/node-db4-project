exports.seed = async function(knex) {
  await knex("instructions").insert([
    { recipe_id: 1, 
      step_number: 1,
      step: "Dice tomato, onion, and bell pepper."
    },
    { recipe_id: 1, 
      step_number: 2,
      step: "Cook in a little olive oil in a pot until soft on medium heat."
    },
    { recipe_id: 1, 
      step_number: 3,
      step: "Add tomato sauce and green olives to the mixture until green olives have softened."
    },
    { recipe_id: 1, 
      step_number: 4,
      step: "Add red beans and a can of water to the mixture."
    },
    { recipe_id: 1, 
      step_number: 5,
      step: "Add sazon packet and salt and pepper to taste."
    },
    { recipe_id: 1, 
      step_number: 6,
      step: "Cook beans on medium heat for 20-30 minutes."
    },
    { recipe_id: 2, 
      step_number: 1,
      step: "Preheat the oven to 425, place pizza crust on a pizza pan, and brush pizza crusts with a little olive oil."
    },
    { recipe_id: 2, 
      step_number: 2,
      step: "Spread pizza sauce onto the pizza crust."
    },
    { recipe_id: 2, 
      step_number: 3,
      step: "Sprinkle shredded cheese over the pizza sauce."
    },
    { recipe_id: 2, 
      step_number: 4,
      step: "Add pepperoni to the top of the pizza."
    },
    { recipe_id: 2, 
      step_number: 5,
      step: "Place pizza in the oven and cook for 10-15 minutes."
    },
    { recipe_id: 2, 
      step_number: 6,
      step: "Slice and serve."
    },
    { recipe_id: 3, 
      step_number: 1,
      step: "Add 5 cups of water to a pot and boil with a sprinkle of salt added."
    },
    { recipe_id: 3, 
      step_number: 2,
      step: "Place uncooked pasta into the boiling water."
    },
    { recipe_id: 3, 
      step_number: 3,
      step: "Cook for 5 minutes."
    },
    { recipe_id: 3, 
      step_number: 4,
      step: "Drain and rinse the pasta."
    },
    { recipe_id: 3, 
      step_number: 5,
      step: "Add pasta sauce and mix."
    },
  ])
};
