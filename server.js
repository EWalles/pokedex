// REQUIRE DEPENDENCIES

const express    = require('express');
const app        = express();
const methodOverride = require('method-override');
const Pokemon    = require('./models/pokemon.js');
const PORT    = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//DEFINE ROUTE
app.get('/', function(req, res) {
    res.render('index.ejs', {
      data: Pokemon
    });
  });

//INDEX


//NEW


//DELETE


//UPDATE


//CREATE


//EDIT


//SHOW

app.get('/:index', function(req, res) {
    res.render('show.ejs', {
      data: Pokemon[req.params.index],
      index: req.params.index
    });
  });
//TELL OUR APP TO LISTEN
app.listen(PORT, function() {
    console.log("Pokedex App is listening to port " + PORT + ".");
  });
  