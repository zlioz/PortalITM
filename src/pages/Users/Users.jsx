import React, { Component } from "react";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import Users from "../../styles/Users";

class Users extends Component {


    render() {

        return (<div><Header></Header>
            <div className="container">
                <div className="oferta">

                    
                    <center><h1>Listado de ofertas Academicas</h1>
                    <h2>Administración Tecnológica</h2>
                    <h4>Duración: 10 semestres</h4>
                    <h4>Sede: Fraternidad</h4></center>
                                        

                </div>
            </div>
            
            <Footer></Footer>
        </div>

        )
    }
}

export default Users;