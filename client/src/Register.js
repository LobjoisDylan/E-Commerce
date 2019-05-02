import React, { Component } from 'react';
import Footer from './Component/Footer'
import './style/Register.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Register extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8000/api/user/add', {
            method: 'POST',
            body: data,
        })
        .then(res => res.json())
        .then(
            (result) => {
                 this.props.history.push(`/`)
            }
        )
    }

    render() {
        return (
        <div className="App">
            <div className="container">
                <div className="row">
                     <h1 className="text-secondary col col-md-3"><Link to='/'>OBJ Tech</Link></h1>
                 </div>
                    <div class="row">
                        <div className="col col-md-6 offset-4">
                            <h1 className="create text-danger">Créer votre compte</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col col-md-6 offset-4">
                            <h2 className="text-secondary">Identifiant</h2>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div class="col col-md-6 offset-4">
                                <label>Pseudo<span className="etoile"> *</span></label>
                                <input type="text" name="username" placeholder="username" className="form-control" required/><br />
                                <label>Email<span className="etoile"> *</span></label>
                                <input type="text" name="email" placeholder="email" className="form-control" required/><br />
                                <label>Mot de passe<span className="etoile"> *</span></label>
                                <input type="password" name="password" placeholder="password" className="form-control" required/><br />
                                <label>Confirmation mot de passe<span className="etoile"> *</span></label>
                                <input type="password" name="confirmPassword" placeholder="password confirm" className="form-control" required/><br />
                            </div>
                        </div>

                        <div class="row">
                            <div className="col col-md-6 offset-4">
                                <h2 className="text-secondary">Informations personnelles</h2>
                                <label>Prénom<span className="etoile"> *</span></label>
                                <input type="text" name="name" placeholder="Prénom" className="form-control" required/><br />
                                <label>Nom<span className="etoile"> *</span></label>
                                <input type="text" name="lastname" placeholder="Nom" className="form-control" required/><br />
                                <label>Civilité<span className="etoile"> *</span></label><br />
                                <div className="radio">
                                    <input type="radio" name="civilite" id="homme" value="Homme" />
                                    <label className="homme">Homme</label>
                                    <input type="radio" name="civilite" id="femme" value="Femme" />
                                    <label className="femme">Femme</label><br />
                                </div>
                                <label>Adresse<span className="etoile"> *</span></label>
                                <input type="text" name="adresse" placeholder="Adresse" className="form-control" required/><br />
                                <label>Code postal<span className="etoile"> *</span></label>
                                <input type="text" name="postal" placeholder="Code Postal" className="form-control" required/><br />
                                <label>Date de naissance</label>
                                <input type="date" name="birthday" placeholder="Date de naissance" className="form-control"/><br />
                                <label>Pays<span className="etoile"> *</span></label>
                                <input type="text" name="country" placeholder="Pays" className="form-control" required/><br />
                                <label>Téléphone</label>
                                <input type="text" name="phone" placeholder="Téléphone" className="form-control" /><br />
                                <input type="submit" className="form-control btn btn-danger" /> <br />
                                <p>Ces<span className="etoile"> *</span> Champs sont obligatoires</p>
                            </div>
                        </div>
                    </form>
                <Footer />
            </div>
        </div>
    );
  }
}

export default Register;
