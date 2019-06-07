const express = require('express');
const router = express.Router();

const users = require('./users.js');
const recipes = require('./recipes.js');

/* User Router */
router.get("/users", users.getUser);
router.get("/users/:_id", users.getUser);
router.post("/users", users.postUser);
router.put("/users/:userId", users.putUser);
router.delete("/users/:userId", users.deleteUser);

/* Recipe Router */
router.get("/recipes", recipes.getRecipe);
router.get("/recipes/:id", recipes.getRecipeId);
router.post("/recipes", recipes.postRecipe);
router.put("/recipes", recipes.putRecipe);
router.delete("/recipes", recipes.deleteRecipeId);

module.exports = router