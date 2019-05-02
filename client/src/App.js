import React, { Component, Fragment } from 'react';
import './style/App.css';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import 'react-animated-slider/build/horizontal.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        pictures: [],
        promotions: []
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

      fetch("http://localhost:8000/api/promotions")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  promotions: result
              });
          }
        )
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

    affichPromotion() {
      return this.state.promotions.map(promotion => {
        return this.state.articles.map(article => {
          return this.state.pictures.map(picture => {
             const prix_gagnée = ((article.price) * promotion.reductions / 100);
             const reduction = article.price - prix_gagnée;
            return <Fragment>
            {promotion.reductions > 0 && article.id == picture.idArticles && article.idPromotions == promotion.id && picture.primaryPic != 0 ?
             <div className="col col-md-4">
            <div className="detail text-center">
              <h2>{article.name}</h2>
              <a href={`/produit/${article.id}`}><img className="picture" src={picture.pictureName} /></a>
              <p><strike className="text-danger">{article.price}€ </strike>-{promotion.reductions}% <br />
              Nouveau prix: <b>{reduction} €</b></p>
              </div>
            </div>
            : null }
        </Fragment>
        });
      });
    });
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
            <div className="row">
              {this.affichArticles()}
            </div>

          <div className="promotion">
            <h3>Article en promotion</h3>
          </div>

          <div className="row">
            {this.affichPromotion()}
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
