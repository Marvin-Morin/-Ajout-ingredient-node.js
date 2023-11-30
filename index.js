const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const recipe = {
    title: "Spaghetti Carbonara",
    ingredients: ["pâtes", "lardons", "œufs", "parmesan", "poivre noir"],
    steps: [
        "Faites cuire les pâtes.",
        "Faites revenir les lardons.",
        "Mélangez les œufs et le parmesan et ajoutez-les aux pâtes.",
        "Ajoutez les lardons et assaisonnez avec du poivre noir."
    ]
};

app.get('/', (req, res) => {
    res.render('index', { recipe });
});

app.post('/ajouter-ingredient', (req, res) => {
    const nouvelIngredient = req.body.nouvelIngredient;
    if (nouvelIngredient) {
        recipe.ingredients.push(nouvelIngredient);
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
});
