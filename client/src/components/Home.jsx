import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes, filterCreatedRecipe, orderByName } from '../actions';
import { Link } from 'react-router-dom'
import RecipeCard from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import "../assets/estilos.css";

export default function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, /* setRecipesPerPage */ ] = useState(9)
    const lastRecipe = currentPage * recipesPerPage
    const firstRecipe = lastRecipe - recipesPerPage
    const actualRecipes = allRecipes.slice(firstRecipe, lastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    };

    function handleFilterRecipeCreated(e) {
        dispatch(filterCreatedRecipe(e.target.value))
    };

    function handleNameSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
    };

    return(
        <div>
            <h1 className="home">Delicias Culinarias</h1>
            <Link to='/home'>
                <button className="reload" onClick = {e => {handleClick(e)}}>Reload page</button>
            </Link>
            <div>
                <select onChange= {e => handleNameSort(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange= {e => handleFilterRecipeCreated(e)}>
                    <option value= 'All'>Todas las recetas</option>
                    <option value= 'created'>Recetas creadas</option>
                    <option value='api'>Api Recipes</option>
                </select>
                <SearchBar className='barra'/>
                <Link to='/recipe'><button className="create">Create a Recipe</button></Link>
                <Paginado
                    recipesPerPage= {recipesPerPage}
                    allRecipes= {allRecipes.length}
                    paginado= {paginado}
                />
                {
                    actualRecipes?.map((el) => {
                        return(
                            <fragment>
                                <Link to= {`/home/:` + el.id}>
                                    <RecipeCard name= {el.name} imagen= {el.imagen} tipo= {el.tipo} key={el.id}/>
                                </Link>
                            </fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}