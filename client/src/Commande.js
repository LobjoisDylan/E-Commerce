import React, { Component } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'


class Commande extends Component {
    render() {
        return(
            <div className="App">
                <div className="container">
                    <Header />
                    <h1 className="text-danger">Livraison en cours</h1>
                    <div className="row">
                        <div className="border">
                            <p>article</p> 
                        </div>
                     </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Commande