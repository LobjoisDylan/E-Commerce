import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FacebookPng from '../assets/picture/facebook1.png'
import TwitterJpg from '../assets/picture/twitter1.jpg'
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className='row bg-secondary text-white'>
                    <div className="col col-md-3 offset-md-1 mt-4">
                        <a href="" className="image"><img src={FacebookPng} /></a>
                        <a href=""><img src={TwitterJpg} /></a>
                    </div>
                    <div className="col col-md-4">
                        <p>
                            24 rue pasteur<br/>
                            94270 Le Kremlin-bicêtre<br/>
                            08 36 30 36 30<br/>
                            jerome.cyrus@epitech.eu<br />
                            <a href="">Nous contacter</a>
                        </p>
                    </div>
                    <div className="col col-md-4 mt-4">
                        <p>
                            Créé par Jérome Cyrus, Joaquim Gameiro et Dylan Lobjois<br/>
                            <a href="">Politique de Confidentialité</a><br/>
                            <Link to="/admin">Panneau d'administration</Link>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
