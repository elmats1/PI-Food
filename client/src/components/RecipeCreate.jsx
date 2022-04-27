import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postRecipe, getTypes } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';

function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Se requiere un nombre";
    } else if (typeof input.name !== "undefined") {
        if(!input.name.match(/^[a-zA-Z]+$/)) {
            errors.name = 'No se permiten caracteres especiales, solo letras.';
        }
    }
    
    if(!input.puntuacion) {
        errors.puntuacion = 'Se requiere puntuacion';
    } else if (typeof input.puntuacion !== "undefined") {
        if(!input.puntuacion.match(/^[0-9]+$/)) {
            errors.puntuacion = 'Solo se permiten numeros'
        }
    }

    if(!input.nivel) {
        errors.nivel = 'Se requiere nivel de comida saludable';
    } else if (typeof input.nivel !== "undefined") {
        if(!input.nivel.match(/^[0-9]+$/)) {
            errors.nivel = 'Solo se permiten numeros'
        }
    }

    if(!input.img) {
        errors.img = 'Se requiere una imagen';
    }

    if(!input.resumenPlato) {
        errors.resumenPlato = 'Es necesario agregar un resumen del platillo';
    }

    if(!input.pasos) {
        errors.pasos = 'Es necesario agregar los pasos para su elaboración';
    }

    return errors;
    //Creo que faltan
};

export default function RecipeCreate(){
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        puntuacion: "",
        resumenPlato: "",
        nivel: "",
        pasos: "",
        img: "",
        tipo: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    }

    function handleSelect(e) {
        setInput({
            ...input,
            tipo: [...input.tipo, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(input))
        alert("Receta creada con éxito")
        setInput({
            name: "",
            puntuacion: "",
            resumenPlato:"",
            nivel: "",
            pasos: "",
            img: "",
            tipo: []
        })
    }

    function handleDelete(el) {
        setInput({
            ...input,
            tipo: input.tipo.filter(tip => tip !== el)
        })
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    return(
        <div>
            <h2>Crea tu receta</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value= {input.name} name="name" onChange={(e) => handleChange(e)}/>
                    {errors.name && (
                        <p className= 'error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Resumen del Plato:</label>
                    <input type="text" value={input.resumenPlato} name="resumenPlato" onChange={(e) => handleChange(e)}/>
                    {errors.resumenPlato && (
                        <p className= 'error'>{errors.resumenPlato}</p>
                    )}
                </div>
                <div>
                    <label>Puntuacion:</label>
                    <input type="text" value={input.puntuacion} name="puntuacion" onChange={(e) => handleChange(e)}/>
                    {errors.puntuacion && (
                        <p className= 'error'>{errors.puntuacion}</p>
                    )}
                </div>
                <div>
                    <label>Nivel de Comida saludable:</label>
                    <input type="text" value={input.nivel} name="nivel" onChange={(e) => handleChange(e)}/>
                    {errors.nivel && (
                        <p className= 'error'>{errors.nivel}</p>
                    )}
                </div>
                <div>
                    <label>Pasos para la elaboración:</label>
                    <input type="text" value={input.pasos} name="pasos" onChange={(e) => handleChange(e)}/>
                    {errors.pasos && (
                        <p className= 'error'>{errors.pasos}</p>
                    )}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="url" value={input.img} name="img" onChange={(e) => handleChange(e)}/>
                    {errors.img && (
                        <p className= 'error'>{errors.img}</p>
                    )}
                </div>
                <label>Tipo de Dieta:</label>
                <select onChange= {(e) => handleSelect(e)}>
                    {types.map((tip) => (
                        <option value= {tip.name}>{tip.name}</option>
                    ))}
                </select>
                <ul><il>{input.tipo.map(el => el + " ,")}</il></ul>
                <button type='submit'>Crear Receta</button>
            </form>
            {input.types.map(el => 
                    <div className='tipDelete'>
                        <p>{el}</p>
                        <button className= 'btnDel' onClick= {() => handleDelete(el)}>x</button>
                    </div>
                )}
            <Link to='/home'><button>Volver</button></Link>
        </div>
    )
}