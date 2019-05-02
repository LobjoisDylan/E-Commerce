import React, { Component } from 'react';

class Filtre extends Component {
    render() {
        return (
            <form action="" method="post">
                <div className="row">
                    <div className="col col-md-2">
                        <label>Prix entre<span className="test"></span></label>
                    </div>
                    <div className="col col-md-2">
                        <select className="form-control">
                            <option>0-9</option>
                            <option>10-99</option>
                            <option>100-499</option>
                            <option>500-999</option>
                            <option>1000 et +</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-2">
                        <label>Categorie<span className="test"></span></label>
                    </div>
                    <div className="col col-md-2">
                        <select className="form-control">
                            <option>Ecran</option>
                            <option>Souris</option>
                            <option>Ordinateur</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-2">
                        <label>En stock<span className="test"></span></label>
                    </div>
                    <div className="col col-md-2">
                        <input type="checkbox" className="checkbox"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-2">
                        <label>Référence</label>
                    </div>

                    <div className="col col-md-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-4">
                        <input type="submit" value="Rechercher" className="mt-3 form-control btn btn-danger" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Filtre