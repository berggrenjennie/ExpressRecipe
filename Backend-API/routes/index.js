const express = require('express');
const router = express.Router();

const users = require('./users.js');

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})


/* User Router*/
router.get("/users", users.getUser);
router.get("/users/:_id", users.getUser);
router.post("/users", users.postUser);
router.put("/users/:userId", users.putUser);
router.delete("/users/:userId", users.deleteUser);


module.exports = router
