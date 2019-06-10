// get all recipes & get recipe by category.
getRecipe = (req, res, next) => {
  var query;
  if(req.query.category) {
    query = req.models.Recipe.findOne({ category: req.query.category })
  } else {
    query = req.models.Recipe.find()
  }
  query.exec().then((recipe) => {
    return res.send(recipe);
  }).catch((error) => next(error))
}

// get recipe by id.
getRecipeId = (req, res, next) => {
  req.models.Recipe.findById(req.params.id).then((recipe) => {
    return res.send(recipe);
  })
}

// post/add recipe.
postRecipe = (req, res, next) => {
  req.models.Recipe.create({
    category: req.body.category,
    name: req.body.name,
    preamble: req.body.preamble,
    ingredients: req.body.ingredients,
    preparation: req.body.preparation,
    imagePath: req.body.imagePath,
    videoPath: req.body.videoPath,
    portions: req.body.portions,
    preparationTime: req.body.preparationTime,
    diet: req.body.diet
  }).then((recipe) => {
    return res.status(201).send(recipe)
  }).catch((error) => {
    next(error)
  })
}

// put/update recipe
putRecipe = (req, res, next) => {
  req.models.Recipe.updateOne(
    { _id: req.params.recipeId },
    {
      category: req.body.category,
      name: req.body.name,
      preamble: req.body.preamble,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation,
      imagePath: req.body.imagePath,
      videoPath: req.body.videoPath,
      portions: req.body.portions,
      preparationTime: req.body.preparationTime,
      diet: req.body.diet
    },
    {
      new: true,
      upsert: true,
      runvalidators: true,
    }
  ).then((status) => {
    console.log("status: ", status)
    if (status.upserted) {
      res.status(201)
    } else if (status.nModified) {
      res.status(200)
    } else {
      res.status(204)
    }
    res.send()
  }).catch((error) => next(error))
}

// delete recipe
deleteRecipeId = (req, res, next) => {
  req.models.Recipe.findByIdAndRemove(req.params.recipeId).then((recipe) => {
    return res.status(200).send(recipe)
  }).catch((error) => {
    next(error)
  })
}

module.exports = {
  getRecipe,
  getRecipeId,
  postRecipe,
  putRecipe,
  deleteRecipeId
}
