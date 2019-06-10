//feedback on recipeSchema!
mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  preamble: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  preparation: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  videoPath: {
    type: String
  },
  portions: {
    type: Number
  },
  preparationTime: {
    type: String
  },
  diet: {
    type: String
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
