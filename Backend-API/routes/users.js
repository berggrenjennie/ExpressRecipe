
getUser = (req, res, next) => {
    console.log(req.params._id);
    if(req.params._id) {
        req.models.User.findById(
            req.params._id,
            req.body,
        ).then((user) => {
            return res.send(user);
        }).catch((error) => {
            next(error)
        })
    } else {
        req.models.User.find().then((user) => {
            return res.send(user);
        }).catch((error) => {
            next(error)
        })
    }
}


postUser = (req, res, next) => {
  req.models.User.create({
    email: req.body.email,
    password: req.body.password,
    permission:req.body.permission,
  }).then((user) => {
    return res.status(201).send(user)
  }).catch((error) => {
    next(error)
  })
}

putUser = (req, res, next) => {
  req.models.User.updateOne({_id: req.params.userId},
    {
      email: req.body.email,
      password: req.body.password,
      permission:req.body.permission
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

deleteUser = (req, res, next) => {
  console.log(req.params.userId);
  req.models.User.findByIdAndDelete(req.params.userId).then((user)=> {
    if (user)
      return res.send(user).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}


module.exports = {
postUser,
getUser,
putUser,
deleteUser
}
