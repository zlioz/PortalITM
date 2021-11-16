import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


class Users extends Component {


    render() {

        return (<div><Header></Header>
            <div className="container">
                <div className="oferta">

                    <p>
                    <center><h1>Listado de ofertas Academicas</h1>
                    <h2>Administración Tecnológica</h2>
                    <h4>Duración: 10 semestres</h4>
                    <h4>Sede: Fraternidad</h4></center>
                    </p>                    

                </div>
            </div>
            
            <Footer></Footer>
        </div>

        )
    }
}

export default Users;