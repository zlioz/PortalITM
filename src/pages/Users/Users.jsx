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
                    <h5>Administración Tecnológica</h5>
                    <h6>Duración: 10 semestres</h6>
                    <h6>Sede: Fraternidad</h6>           

                </div>
            </div>
            listado de ofertas
            <Footer></Footer>
        </div>

        )
    }
}

export default Users;