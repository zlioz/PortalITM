import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import "../../styles/Users.css"

class Users extends Component {


    render() {

        return (<div><Header></Header>
            <div className="container">
                <center><h1>Listado de ofertas Academicas</h1></center>
                <div className="oferta">
                    <center>
                        <h2>Administración Tecnológica</h2>
                        <h4>Duración: 10 semestres</h4>
                        <h4>Sede: Fraternidad</h4></center>
                </div>

                <div className="oferta">
                    <center>
                        <h2>Artes de la Grabación y Producción Musical</h2>
                        <h4>Duración: 10 semestres</h4>
                        <h4>Sede: Robledo</h4></center>
                </div>

                <div className="oferta">
                    <center>
                        <h2>Ciencias Ambientales</h2>
                        <h4>Duración: 10 semestres</h4>
                        <h4>Sede: Guajira</h4></center>
                </div>


                
            </div>

    
        </div>

        )
    }
}

export default Users;