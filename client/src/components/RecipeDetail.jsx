import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../actions";
import { useEffect } from "react";

export default function RecipeDetail(props){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(recipeDetail(props.match.params.id));
    }, );

    const myRecipe = useSelector((state) => state.detail)

    return(
        <div>
            {
            myRecipe.length > 0 ?
            <div>
                <h1>{myRecipe[0].name}</h1>
                <img src= {myRecipe[0].img? myRecipe[0].img : myRecipe[0].imagen} alt="" width="500px" height="600px"/>
                <h2>Puntuacion: {myRecipe[0].puntuacion}</h2>
                <h2>Nivel de comida "saludable": {myRecipe[0].nivel}</h2>
                <p>Resumen del plato: {myRecipe[0].resumenPlato}</p>
                <p>Pasos a seguir: {myRecipe[0].pasos}</p>
                <h4>Tipo de Dieta: {!myRecipe[0].creadoEnBase? myRecipe[0].tipo + ' ' : myRecipe[0].types.map(el => el.name + (' '))}</h4>
            </div> : <p>Cocinando...</p>
        }
        <Link to= '/recipes/'>
            <button className="btnVolver">Volver</button>
        </Link>
        </div>
    )
}
