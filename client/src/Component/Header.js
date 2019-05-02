import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Header.css'
import Connexion from './Connexion.js'
import PanierPng from '../assets/picture/panier.png'
import UserPng from '../assets/picture/user.png'
import EditPng from '../assets/picture/edit.png'
const connexion = 0;

class Header extends Component {

    constructor() {
        super();
        this.state = {
            connexion: false,
            category: [],
            id: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/category")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    category: result
                });
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8000/api/articles/search', {
            method: 'POST',
            body: data,
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                if(result != 0) {
                      document.location.href=`/produit/${result}`;
                }
                if(result == 0) {
                    document.location.href=`/catalogue`;
                }

            }
        )
    }

    SelectCategory() {
        return this.state.category.map(category => {
            return <option value={category.id}>{category.name}</option>
        });
    }

    handleClick() {
        if(this.state.connexion === false) {
            this.setState({
                connexion: true
            })
        }
        else {
            this.setState({
                connexion: false
            })
        }
    }

    render() {
        return (
             <header>
                <div className="row">
                    <h1 className="titre"><Link to='/'>OBJ Tech</Link></h1>
                    <form className="row" style={{ width: '40%' }} onSubmit={this.handleSubmit}>
                        <select name="category" className="form-control select" style={{ width: '40%' }}>
                            {this.SelectCategory()}
                        </select>
                        <input name="search" type="text" className="form-control input" style={{ width: '40%', marginTop: '5px'}}/>
                    </form>
                    <p><img src={ PanierPng } className="image" /></p>
                    <p onClick={this.handleClick} href={connexion < 1 ? 'google.com' : 'facebook.com'}>{connexion < 1 ? <img className="image" src={UserPng} /> : <img className="image" src={EditPng} />}</p>
                    { this.state.connexion === true ? <Connexion/> : null }
                </div>
             </header>
         )
    }
 }

 export default Header
