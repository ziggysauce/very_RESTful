const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

const app = express();
const PORT = process.env.PORT || 3000;

// APP CONFIG
mongoose.connect('mongodb://localhost/recipe_book');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

// MONGOOSE.MODEL CONFIG
const recipeBookSchema = new mongoose.Schema({
  title: String,
  image: String,
  ingredients: String,
  instructions: String,
});

const Recipe = mongoose.model('Recipes', recipeBookSchema);

app.get('/', (req,res) => {
  res.render('landing');
});

// INDEX ROUTE
app.get('/recipes', (req,res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {recipes: recipes});
    }
  });
});

// NEW ROUTE
app.get('/recipes/add', (req,res) => {
  res.render('add');
});

// CREATE ROUTE
app.post('/recipes', (req,res) => {
  Recipe.create(req.body.recipe, (err, newRecipe) => {
    if (err) {
      res.render('add');
    } else {
      res.redirect('/recipes');
    }
  });
});

// SHOW ROUTE
app.get('/recipes/:id', (req,res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.render('show', {recipe: foundRecipe});
    }
  });
});

// EDIT ROUTE
app.get('/recipes/:id/edit', (req,res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.render('edit', {recipe: foundRecipe});
    }
  });
});

// UPDATE ROUTE
app.put('/recipes/:id', (req,res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, (err, updatedRecipe) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.redirect('/recipes/' + req.params.id);
    }
  });
});

// DELETE ROUTE
app.delete('/recipes/:id', (req,res) => {
  Recipe.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.redirect('/recipes');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});