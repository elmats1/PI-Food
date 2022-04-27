import React from 'react';

export default function RecipeCard({ id, name, imagen, tipo }){
    return(
        <div className='cardDiv'>
            <img src = {imagen} alt= "Imagen no encontrada" width="200px" height="200px" className='cardImg'/>
            <h3 className='h3'> {name} </h3>
            <h3 className='h3'> { tipo } </h3>
        </div>
    );
}