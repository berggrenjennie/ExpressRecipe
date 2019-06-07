mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({

userId:{
  type: String,
  require: true
},

recipeId: {
  type: String,
  require: true
},

comment: String

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
