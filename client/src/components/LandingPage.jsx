import React from 'react';
import { Link } from 'react-router-dom';
import "./landing.css";

export default function LandingPage(){
    return(
        <div>
            <h1>Bienvenido a Delicias Culinarias</h1>
            <Link to = '/home'>
                <button className="landing">Conoce más</button>
            </Link>
        </div>
    );
};