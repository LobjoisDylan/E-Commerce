import React, { Component } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import './style/Produit.css'

var path = window.location.pathname;
var split = path.split("/")

class Produit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            pictures: []
        }
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
    
          fetch("http://localhost:8000/api/picture")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                      pictures: result
                });
              }
            )
        }

        affichProduitImage() {
            return this.state.pictures.map(picture => {
                if(picture.idArticles == split[2] && picture.primaryPic != 0) {
                    return <img src={picture.pictureName} className="produit"/>
                }
            });
        }

        affichProduitArticle() {
            return this.state.articles.map(article => {
                if(article.id == split[2] ) {
                    return  <p className="description col col-md-7">{article.description}</p>
                }
            });
        }

        affichProduitSlowImage() {
            return this.state.pictures.map(picture => {
                if(picture.idArticles == split[2] && picture.primaryPic == 0) {
                    return <div>
                        <img src={picture.pictureName} className="slowimage" />
                    </div>
                }
            });
        }

    render() {
        return (
            <div className="App">
                <div className="container">
                <Header />
                    <div className="row">
                        <div className="border">
                            {this.affichProduitSlowImage()}
                        </div>
                        {this.affichProduitImage()}
                        {this.affichProduitArticle()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Produit