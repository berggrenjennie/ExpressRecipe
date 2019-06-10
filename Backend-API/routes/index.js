const express = require('express');
const router = express.Router();

const users = require('./users.js');
const recipes = require('./recipes.js');
const comments = require('./comments.js')

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
router.put("/recipes/:recipeId", recipes.putRecipe);
router.delete("/recipes/:recipeId", recipes.deleteRecipeId);

/*Comment Router*/
 router.get("/comments", comments.getComment);
 router.get("/comments/:_id", comments.getComment);
 router.post("/comments", comments.postComment);
 router.put("/comments/:commentId", comments.putComment);
 router.delete("/comments/:commentId", comments.deleteComment);

module.exports = router
