import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Admin from './Admin';
import Register from './Register';
import Catalogue from './Catalogue';
import Panier from './Panier';
import Produit from './Produit';
import AddArticle from './AddArticle';
import Commande from './Commande';
import Edit from './Edit';
import Account from './Account';
import EditProfil from './EditProfil';
import GestionArticles from './GestionArticles';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
    <BrowserRouter>
        <Switch>
           <Route exact path='/' component={ App } />
           <Route exact path='/Admin' component={ Admin } />
           <Route exact path='/Register' component={ Register } />
           <Route exact path='/Catalogue' component={ Catalogue } />
           <Route exact path='/Panier' component={ Panier } />
           <Route path='/Produit/:id' component={ Produit } />
           <Route exact path='/add-articles' component={ AddArticle } />
           <Route path='/edit-article/:id' component={ Edit } />
           <Route exact path='/Commande' component={ Commande } />
           <Route exact path='/GestionArticles' component={ GestionArticles } />
           <Route exact path="/account/:id" component={ Account } />
           <Route exact path="/account/edit/:id" component={ EditProfil } />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
