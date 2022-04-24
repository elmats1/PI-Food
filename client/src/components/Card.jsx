import React from 'react';

export default function RecipeCard({ name, resumenPlato, imagen, puntuacion, nivel, pasos, tipo }){
    return(
        <div>
            <h3> {name} </h3>
            <h3> {resumenPlato} </h3>
            <h3> {puntuacion} </h3>
            <h3> {nivel} </h3>
            <h3> {pasos} </h3>
            <h3> {tipo} </h3>
            <img src = {imagen} alt= "Imagen no encontrada" width="200px" height="250px" />
        </div>
    );
}