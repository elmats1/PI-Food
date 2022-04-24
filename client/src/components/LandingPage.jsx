import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(){
    return(
        <div>
            <h1>Bienvenido a Delicias Culinarias</h1>
            <Link to = '/home'>
                <button>Conoce más</button>
            </Link>
        </div>
    )
}