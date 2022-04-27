import React from 'react';
import "../assets/estilos.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for(let i=0; i <= Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i + 1)
    }
    return(
        <nav className="navpaginado">
            <ul>
                {pageNumbers?.map(number => {
                    return(
                    <li className= 'paginado'>
                        <button className="btnpaginado" OnClick= {() => paginado(number)}>{number}</button>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}