import React, { Component } from 'react';
import './style/Admin.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            articles : []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/users")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    users: result
                });
            }
        )

        fetch("http://localhost:8000/api/articles/tenlast")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    articles: result
                });
            }
        )
    }

    affichMembers() {
        return this.state.users.map(user => {
            return <span className="users">{user.email}</span>
        });
    }

    affichArticles() {
        return this.state.articles.map(article => {
            return <span className="users"><a href={`/produit/${article.id}`}>{article.name}</a></span>
        });
    }

    render() {
    return (
        <div className="App">
            <div className="container">
                <Header />

                <h1>Panneau d'administration</h1>
                <div className="list">
                    <div className="content">
                        <div className="listContainer">
                            <h5>10 derniers membres</h5>
                            {this.affichMembers()}
                        </div>
                        <div className="gestion">
                            <a href="">Gestion utilisateurs</a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="listContainer">
                            <h5>10 derniers articles</h5>
                            {this.affichArticles()}
                        </div>
                        <div className="gestion">
                            <Link to="/GestionArticles">Gestion articles</Link>
                        </div>
                    </div>
                    <div className="content">
                        <div className="listContainer">
                            <h5>10 dernières commandes</h5>
                        </div>
                        <div className="gestion">
                            <a href="">Gestion commandes</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Admin;
