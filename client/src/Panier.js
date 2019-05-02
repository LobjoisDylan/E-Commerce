import React, {Component} from 'react'
import './style/Panier.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import LinePng from './assets/picture/line.png'
import PlusPng from './assets/picture/plus.png'

const number = {
    panier1 : {
        quantite: 1,
        prix: 5
    },

    panier2 : {
        quantite: 1,
        prix: 10
    },
}

const prix = number.panier1.prix

class Panier extends Component {
    
    state = {
        number
    }
    
    plus = () => {
        const number = { ...this.state.number }
        number.panier1.quantite += 1
        number.panier1.prix += prix
        number.panier2.quantite += 1
        number.panier2.prix += prix
        this.setState({ number })
    }

    moin = () => {
        const number = { ...this.state.number }
        number.panier1.quantite -= 1
        number.panier1.prix -= prix
        number.panier2.quantite -= 1
        number.panier2.prix -= prix
        this.setState({ number })
    }

    render() {
        return(
            <div className="App">
                <div className="container">
                    <Header />      
                    <div className="row">
                        <div className="col col-md-6">
                            <p><b>Nom de l'article 1</b><br />
                            Détail de l'article</p>
                        </div>
                        <div className="col col-md-2">
                            <b><p>Référence</p></b>
                        </div>
                        <div className="col col-md-1">
                            <b><p>{this.state.number.panier1.prix}</p></b>
                        </div>
                
                        <div className="col col-md-2">
                            <img src={LinePng} onClick={this.moin} />
                            <input type="text" className="input" value={this.state.number.panier1.quantite}/>
                            <img src={PlusPng} onClick={this.plus} />                              
                        </div>

                        <div className="col col-md-6">
                            <p><b>Nom de l'article 2</b><br />
                            Détail de l'article</p>
                        </div>
                        <div className="col col-md-2">
                            <b><p>Référence</p></b>
                        </div>
                        <div className="col col-md-1">
                            <b><p>{this.state.number.panier1.prix}</p></b>
                        </div>
                
                        <div className="col col-md-2">
                            <img src={LinePng} onClick={this.moin} />
                            <input type="text" className="input" value={this.state.number.panier1.quantite}/>
                            <img src={PlusPng} onClick={this.plus} />                              
                        </div>

                        <div className="col col-md-6">
                            <p><b>Nom de l'article 3</b><br />
                            Détail de l'article</p>
                        </div>
                        <div className="col col-md-2">
                            <b><p>Référence</p></b>
                        </div>
                        <div className="col col-md-1">
                            <b><p>{this.state.number.panier1.prix}</p></b>
                        </div>
                
                        <div className="col col-md-2">
                            <img src={LinePng} onClick={this.moin} />
                            <input type="text" className="input" value={this.state.number.panier1.quantite}/>
                            <img src={PlusPng} onClick={this.plus} />                              
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-md-4 offset-md-9">
                            <button href="" className="buy-margin btn btn-danger">Acheter</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Panier
