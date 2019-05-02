import React, { Component } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'


var path = window.location.pathname;
var split = path.split("/")
var id = split[2];


class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            pictures: [],
            category : [],
            subCategory : [],
            numCategory : 0,
            numSubCategory: 0

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
        this.handleChangeSubCategorie = this.handleChangeSubCategorie.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this)
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/articles/${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    articles: result
            });
        })

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

        fetch(`http://localhost:8000/api/picture/${id}`)
        .then(res => res.json())
        .then(
          (result) => {
              this.setState({
                  pictures: result
              });
            }
        )
    }

    handleChangeCategorie(event) {
        this.setState({numCategory: event.target.value});
    }
    
    handleChangeSubCategorie(event) {
        this.setState({numSubCategory: event.target.value});
    }

    handleChange(event) {
        this.setState({articles: event.target.value});
    }

    handleChangePicture(event) {
        this.setState({pictures: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch(`http://localhost:8000/api/update/article/${id}`, {
          method: 'POST',
          body: data,
        })
    }

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

    Input() {
        return this.state.pictures.map(picture => {
            if(picture.id == id && picture.id == picture.idArticles)
                return <input type="text" name="picture" className="form-control" value={picture.pictureName} onChange={this.handleChangePicture} disabled />
        });
    }

    affichSubCategory() {
        if(this.state.numCategory) {
            return (
                <div>
                    <label>Sous Catégorie</label>
                    <select name="subcategory" className="form-control" value={this.state.numSubCategory} onChange={this.handleChangeSubCategorie}>
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
                            <h1>Modifier un article</h1>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="border">
                        <div className="row">
                            <div className="col col-md-3 offset-md-3">
                                <label>Nom</label>
                                <input type="text" className="form-control" value={this.state.articles.name} name="name" onChange={this.handleChange} required />
                                <label>Prix</label>
                                <input type="text" className="form-control" value={this.state.articles.price} name="price" onChange={this.handleChange} required />
                                <label>Origine</label>
                                <input type="text" className="form-control" value={this.state.articles.origin} name="origin" onChange={this.handleChange} required />
                                <label>Catégorie</label>
                                <select name="category" className="form-control" value={this.state.numCategory} onChange={this.handleChangeCategorie} required >
                                    {this.SelectCategory()}
                                </select>
                            </div>

                            <div className="col col-md-3">
                                <label>Référence</label>
                                <input type="text" className="form-control" value={this.state.articles.reference} name="reference" onChange={this.handleChange} required />
                                <label>Poid</label>
                                <input type="text" className="form-control" value={this.state.articles.weight} name="weigth" onChange={this.handleChange} required />
                                <label>Marque</label>
                                <input type="text" className="form-control" value={this.state.articles.brand} name="brand" onChange={this.handleChange} required />
                                {this.affichSubCategory()}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-md-6 offset-3">
                                <label>Image principale</label>
                                {this.Input()}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-md-4 offset-4">
                                <label>Description</label>
                                <textarea className="form-control" value={this.state.articles.description} name="description" onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-md-4 offset-4">
                                <input type="submit" className="mt-3 btn btn-danger form-control" value="Valider la modification" />
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

export default Edit