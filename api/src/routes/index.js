require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const {Recipe, Type} = require ('../db');
const { API_KEY } = process.env;
const db = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getFoodInfo = async () => {
    const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey={API_KEY}&addRecipeInformation=true',
    {
        params: {
            number: 100,
        },
    });
    const foodInfo = await apiUrl.data.map(el => {
        return {
            id: el.id,
            name: el.title,
            resumenPlato: el.summary,
            puntuacion: el.spoonacularScore,
            nivel: el.healthScore,
            pasos: el.instructions,
            imagen: el.image,
            tipo: [
                { name: 'Vegetarian' },
                { name: 'Vegan' },
                { name: 'Gluten Free' },
                { name: 'Dairy Free' },
                { name: 'Lacto Ovo Vegetarian' },
                { name: 'Pescetarian' },
                { name: 'Paleolithic' },
                { name: 'Low FODMAP' },
                { name: 'Primal' },
                { name: 'Whole30' },
                { name: 'Ketogenic' },
            ],
        };
    });
    console.log(foodInfo);
    return foodInfo;
};

const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllFoods = async () => {
    const foodInfo = await getFoodInfo();
    const dbInfo = await getDbInfo();
    const infoCompleta = foodInfo.concat(dbInfo);
    return infoCompleta;
}

router.get('/recipes', async (req, res) => {
    const name = req.query.name
    let totalRecipes = await getAllFoods();
    if(name) {
        let recipeName = await totalRecipes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        recipeName.length ?
        res.status(200).send(recipeName) : 
        res.status(404).send('No se encontro la receta');
    } else {
        res.status(200).send(totalRecipes)
    }
})

router.get('/types', async (req, res) => {
    const tipo = [
        { name: 'Vegetarian' },
        { name: 'Vegan' },
        { name: 'Gluten Free' },
        { name: 'Dairy Free' },
        { name: 'Lacto Ovo Vegetarian' },
        { name: 'Pescetarian' },
        { name: 'Paleolithic' },
        { name: 'Low FODMAP' },
        { name: 'Primal' },
        { name: 'Whole30' },
        { name: 'Ketogenic' },
    ];
    tipo.forEach(el => {
        Type.findOrCreate({
            where: { name: el }
        })
    })
    const totalTipos = await Type.findAll();
    res.send(totalTipos);
})

router.post('/recipe', async (req, res) => {
    let {
        name,
        resumenPlato,
        puntuacion,
        nivel,
        pasos,
        creadoEnBase,
        tipo
    } = req.body

    let recipeCreada = await Recipe.create({
        name,
        resumenPlato,
        puntuacion,
        nivel,
        pasos,
        creadoEnBase
    })

    let typeDb = Type.findAll({
        where: { name : tipo }
    })
    recipeCreada.addTypes(typeDb)
    res.send('La receta fue creada con éxito')
})

router.get('/recipes', async (req, res) => {
    const id = req.params.id;
    const totalRecipes = await getAllFoods()
    if(id){
        let idReceta = await totalRecipes.filter(el => el.id == id)
        idReceta.lenght?
        res.status(200).json(idPerro) :
        res.status(404).send('No se ha encontrado la receta')
    }
})

module.exports = router;
