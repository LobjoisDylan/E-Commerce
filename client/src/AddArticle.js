import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './style/AddArticle.css'
import Header from './Component/Header'
import Footer from './Component/Footer'

class AddArticle extends Component {

    constructor() {
        super();
        this.state = {
            category : [],
            subcategory : [],
            defCategory : 0,
            defSubCategory : 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSub = this.handleChangeSub.bind(this);
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

      fetch("http://localhost:8000/api/subcategory")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  subcategory: result
              });
          }
      )
    }

    // changer le select pour la category
    handleChange(event) {
        this.setState({defCategory: event.target.value});
    }

    handleChangeSub(event) {
        this.setState({defSubCategory: event.target.value});
    }

    //lancer le formulaire
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8000/api/articles/add', {
            method: 'POST',
            body: data,
        })
        .then(res => res.json())
        .then(
            (result) => {
                  this.props.history.push(`/produit/${result}`)
            }
        )
    }

    //select pour les categories
    SelectCategory() {
        return this.state.category.map(category => {
            return <option value={category.id}>{category.name}</option>
        });
    }

    SelectSubCategory() {
        return this.state.subcategory.map(subcategory => {
            return <option value={subcategory.id}>{subcategory.name}</option>
        });
    }

    //afficher la liste des sous catégories
    affichSubCategory() {
        if(this.state.defCategory === "3") {
            return (
                <div>
                    <label>Sous Catégorie</label>
                    <select name="subcategory" className="form-control" value={this.state.defSubCategory} onChange={this.handleChangeSub}>
                        {this.SelectSubCategory()}
                    </select>
                </div>
            )
        }
    }

    render() {
        return(
            <div class="App">
                <div className="container">
                <Header />
                    <div className="row">
                        <div className="col col-md-4 offset-md-4">
                            <div className="text-danger mb-5">
                                <h1>Ajouter un article</h1>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="border">
                            <div className="row">
                                <div className="col col-md-3 offset-md-3">
                                    <label>Nom</label>
                                    <input type="text" name="name" className="form-control" required/>
                                    <label>Prix</label>
                                    <input type="text" name="price" className="form-control" required/>
                                    <label>Origine</label>
                                    <input type="text" name="origin" className="form-control" required/>
                                    <label>Catégorie</label>
                                    <select name="category" className="form-control" value={this.state.defCategory} onChange={this.handleChange}>
                                        {this.SelectCategory()}
                                    </select>
                                </div>

                                <div className="col col-md-3">
                                    <label>Référence</label>
                                    <input type="text" name="reference" className="form-control" required/>
                                    <label>Poids</label>
                                    <input type="text" name="weight" className="form-control" required/>
                                    <label>Marque</label>
                                    <input type="text" name="brand" className="form-control" required/>
                                    {this.affichSubCategory()}

                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-6 offset-3">
                                    <label>Image principale</label>
                                    <input type="text" name="picture" className="form-control" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-6 offset-3">
                                    <label>Description</label>
                                    <textarea name="describe" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col col-md-4 offset-4">
                                    <input type="submit" className="mt-3 btn btn-danger form-control" value="Valider l'ajout"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AddArticle
