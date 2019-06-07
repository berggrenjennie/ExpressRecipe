getComment = (req, res, next) => {
    if(req.params._id) {
        req.models.Comment.findById(req.params._id)
        .then((comment) => {
            return res.send(comment);
        }).catch((error) => {
            next(error)
        })
    } else {
        req.models.Comment.find().then((comment) => {
            return res.send(comment);
        }).catch((error) => {
            next(error)
        })
    }
}

// Metoden skapar en ny feedback till ett befintligt recept.
postComment = (req, res, next) => {
  // if(req.params.userId && req.params.recipeId) {
  req.models.Comment.create({
    userId: req.body.userId,
    recipeId: req.body.recipeId,
    comment:req.body.comment,
  }).then((comment) => {
    return res.status(201).send(comment)
  }).catch((error) => {
    next(error)
  })
// }
}


// Metoden skriver över en redan existerande Comment
putComment = (req, res, next) => {
  req.models.Comment.updateOne({_id: req.params.commentId},
    {
      userId: req.body.userId,
      recipeId: req.body.recipeId,
      comment:req.body.comment
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



// Metoden tar bort all feedback som lämnats inom objektet comments(userId, recipeId, comment och rating)//
// Hur hanterar vi om man enbart ska ta bort en kommentar eller rating, använder vi put och lämnar tomt då eller ska
// vi göra en patch också??
deleteComment = (req, res, next) => {
  console.log(req.params.commentId);
  req.models.Comment.findByIdAndDelete(req.params.commentId).then((comment)=> {
    if (comment)
      return res.send(comment).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}

module.exports = {
postComment,
getComment,
putComment,
deleteComment
}
