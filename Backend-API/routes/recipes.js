//get ALL recipes + kategori
getRecipe = (req, res, next) => {
    var query;
    if(req.query.category) {
        query = req.models.Recipe.findOne({category: req.query.category})
    } else {
        query = req.models.Recipe.find()
    }
    query.exec().then((recipe) => {
        return res.send(recipe);
    }).catch((error) => next(error))
}

//get recipe ID
getRecipeId = (req, res, next) => {
    req.models.Recipe.findById(req.params.id).then((recipe) => {
        return res.send(recipe);
    })
}

//add a recipe
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
      return res.status(201).send(`${recipe.name} has been added!`)
    }).catch((error) => {
      next(error)
    })
}
//curl -i -X POST -H "Content-Type:application/json" localhost:3000/recipes -d '{"category": "Huvudrätt","name": "Kasslersallad med couscous", "preamble": "Fräsch och god sallad","ingredients": "3 dl couscous", "preparation": "gör den!", "imagePath": "https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg", "videoPath": "NULL", "portions": "2", "preparationTime": "30", "diet": "vegan" }'

putRecipe = (req, res, next) => {
    req.models.Student.updateOne({_id: req.params.id},
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
    }).then((status) => {
        console.log("status: ", status)
        if (status.upserted)
          res.status(201)
        else if (status.nModified)
          res.status(200)
        else
          res.status(204)
      res.send()
    }).catch((error) => next(error))
}

deleteRecipeId = (req, res, next) => {
    req.models.Recipe.findByIdAndRemove(req.params.id).then((student) => {
        return res.status(200).send(`${recipe.name} has been deleted!`)
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