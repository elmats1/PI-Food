import React from 'react';

export default function Paginado({ recipesPerPage, allFood, paginado }) {
    const pageNumbers = []

    for(let i=0; i <= Math.ceil(allFood/recipesPerPage); i++){
        pageNumbers.push(i + 1)
    }
    return(
        <nav>
            <ul className='ulPaginado'>
                {pageNumbers?.map(number => {
                    <li className= 'paginado'>
                        <a OnClick= {() => paginado(number)}>{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}