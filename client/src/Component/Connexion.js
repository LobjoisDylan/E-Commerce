import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'
import './Connexion.css'

class Connexion extends Component {

    constructor() {
        super();
        this.state = {
            error: false,
            user: [],
            id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selfDisconnect = this.selfDisconnect.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8000/api/connexion', {
            method: 'POST',
            body: data,
        })
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null) {
                    localStorage.setItem('email', result.email);
                    this.setState({ user: result})
                    this.setState({error: false})
                }
                else {
                    this.setState({error: true})
                }
            }
        )
    }

    selfDisconnect() {
        localStorage.removeItem('email');
        this.setState({ user: []})
    }

    displayError() {
        if(this.state.error == true) {
            return <div>
                <span className="text-danger">Une erreur est survenue</span>
            </div>
        }
    }

    getId = () => {

        var email = localStorage.getItem("email");

        fetch("http://localhost:8000/api/users/")
        .then(res => res.json())
        .then(
            (result) => {
                result.map(user => {
                    if(user.email == email){
                        document.location.href=`/account/${user.id}`;
                    }
                })
            }
            )
            this.setState({ id: "jo" })
    }

    userConnected() {

        if(localStorage.getItem('email') != null) {
            return <div>
                <h4 className="text-danger">Déjà connecté ?</h4>
                    <button onClick={this.selfDisconnect} className="form-control text-primary">Se déconnecter</button>
                    <button className="form-control mt-2" onClick={(e) => this.getId()}>Mon Compte</button>
            </div>
        }
        else {
            return <div>
                <h4 className="text-danger">Déjà client ?</h4>
                {this.displayError()}
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" name="email" type="text" placeholder="email" />
                    <input className="form-control" name="password" type="password" placeholder="password" /><br />
                    <input className="form-control" type="submit" value="Connexion" />
                    <hr />
                </form>
            </div>
        }
    }

    render() {
        return (
            <div className="connexion">
                <br />
                {this.userConnected()}
                <h4 className="text-danger">Nouveau Client ?</h4>
                <button className="form-control"><Link to="/register">Inscription</Link></button>
            </div>
        )
    }
}

export default Connexion
