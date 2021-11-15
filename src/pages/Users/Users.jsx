import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


class Users extends Component {


    render() {

        return (<div><Header></Header>
            <div className="container">
                <div className="Oferta">
                    <h1>Administración Tecnológica</h1>
                    <h4>Duración: 10 semestres</h4>
                    <h4>Sede: Fraternidad</h4>

                    

                </div>
            </div>
            listado de ofertas
            <Footer></Footer>
        </div>

        )
    }
}

export default Users;