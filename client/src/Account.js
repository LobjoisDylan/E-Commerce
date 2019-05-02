import React, { Component } from 'react'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: [],
        }
    }

    componentDidMount = () => {
        var url = window.location.href.split("/");
        fetch(`http://localhost:8000/api/users/${url[4]}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({infos: result})
                console.log(this.state.infos);
            }
            )
        }

    editprofil = () => {
        var url = window.location.href.split("/");
        document.location.href=`edit/${url[4]}`;
    }

    render(){
        return(
            <div className="containInfos">
                <div className="boxInfos bg-light col-6 container mt-5 p-5">
                    <i class="far fa-edit float-right text-danger" title="modify account" onClick={(e) => this.editprofil()}></i>
                    <h1 className="text-danger">Espace personnel</h1>
                    <p className="mt-5"><span className="font-weight-bold text-primary d-block">Pseudo:</span> {this.state.infos.pseudo}</p>
                    <p><span className="font-weight-bold text-primary d-block mt-5">Email:</span> {this.state.infos.email}</p>
                    <p><span className="font-weight-bold text-primary d-block mt-5">Password:</span> {this.state.infos.password}</p>
                </div>
            </div>
        )
    }
}

export default Account;