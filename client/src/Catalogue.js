import React, { Component,  Fragment } from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import './style/Catalogue.css'
import Filtre from './Component/Filtre'
import DroitePng from './assets/picture/droite.png'
import GauchePng from './assets/picture/gauche.png'


class Catalogue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filtre: false,
            articles: [],
            pictures: []
        }
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        if(this.state.filtre === false) {
            this.setState({
                filtre: true
            })
        }
        else {
            this.setState({
                filtre: false
            })
        }
    }

    affichArticles() {
      return this.state.articles.map(article => {
        return this.state.pictures.map(picture => {
          return <Fragment>
          {article.id == picture.idArticles && picture.primaryPic != 0 ?
          <div className="col col-md-4">
            <div className="detail text-center">
              <h2>{article.name}</h2>
              <a href={`/produit/${article.id}`}><img className="picture" src={picture.pictureName} /></a>
              <p><b>{article.price}€</b></p>
              </div>
            </div>
            : null }
            </Fragment>
        });
      });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                        <div className="row">
                            {this.state.filtre === true ?
                             <img src={GauchePng} onClick={this.handleClick} />
                            : <img src={DroitePng} onClick={this.handleClick} /> }
                        </div>
                        { this.state.filtre === true ?
                        <div className="filtre">
                            <div className="center">
                                <Filtre />
                            </div>
                        </div>
                        : null }
                        <div className="row">
                          {this.affichArticles()}
                        </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Catalogue;
