import React from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../home.css"


export const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="row opciones col-12">
                <button onClick={() => navigate("/oposicion/practica")} className="col-sm-10 col-md-4 col-xl-3 home-button">Práctica</button>
                <button onClick={() => navigate("/oposicion/examen")} className="col-sm-10 col-md-4 col-xl-3 home-button">Examen</button>
            </div>

        </div>
    )
}