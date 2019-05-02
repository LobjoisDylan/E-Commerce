import React, { Component } from 'react'
import './style/GestionArticles.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class GestionArticles extends Component {
    constructor(props) {
      super(props);
      this.state = {
          articles: []
      }
      this.deleteArticle =this.deleteArticle.bind(this);
    }

    componentDidMount() {
      fetch("http://localhost:8000/api/articles")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  articles: result
              });
          }
        )
    }

    deleteArticle(id) {
        console.log(id)
        fetch(`http://localhost:8000/api/delete/article/${id}`)
        .then( window.location.reload())
    }

    listingArticles() {
        return this.state.articles.map(article => {
            return <tr>
                <td><a href={`/produit/${article.id}`}>{article.name}</a></td>
                <td>{article.description}</td>
                <td>{article.price} €</td>
                <td>{article.stock}</td>
                <td><a href={`/edit-article/${article.id}`}>Modifier</a> - <span onClick={this.deleteArticle.bind(this, `${article.id}`)}>Supprimer</span></td>
            </tr>
        });
    }


    render() {
        return(
            <div>
                <div className="container">
                <Header />
                    <div>
                        <h1>Liste des articles</h1>
                        <table className="table table-danger table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Description</th>
                                    <th scope="col"> Prix</th>
                                    <th scope="col"> Stock</th>
                                    <th scope="col">Gestion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listingArticles()}
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <Link to="/add-articles">Ajouter un article</Link>
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default GestionArticles
