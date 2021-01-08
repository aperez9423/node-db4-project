
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { ingredient_name: "Long Grained Rice" },
    { ingredient_name: "Red Beans" },
    { ingredient_name: "Tomato" },
    { ingredient_name: "Onion" },
    { ingredient_name: "Green Bell Pepper" },
    { ingredient_name: "Sazon Packet" },
    { ingredient_name: "Angel Hair Pasta" },
    { ingredient_name: "Ragu Sauce" },
    { ingredient_name: "Premade Pizza Crust" },
    { ingredient_name: "Ragu Pizza Sauce" },
    { ingredient_name: "Shredded Mozzarella Cheesse" },
    { ingredient_name: "Pepperoni" },
  ])
};
