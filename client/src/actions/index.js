import axios from 'axios';

export function getRecipes() {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}

export function getRecipesName(name) {
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/recipes?name=" + name);
            return dispatch({
                type: "GET_RECIPES_NAME",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTypes() {
    return async function(dispatch){
        var tipos = await axios("http://localhost:3001/types", {
        });
        return dispatch({
            type: "GET_TYPES",
            payload: tipos.data
        })
    }
}

export function postRecipe() {
    return async function(dispatch){
        const newRecipe = await axios.post("http://localhost:3001/recipe", payload);
        return newRecipe;
    }
}

export function filterCreatedRecipe(payload) {
    return {
        type: "FILTER_CREATED_RECIPE",
        payload
    }
}

export function orderByName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function recipeDetail(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/recipes/" + id);
            return dispatch({
                type: "GET_RECIPE_DETAIL",
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}