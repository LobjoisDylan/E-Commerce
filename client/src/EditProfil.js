import React from 'react';

var path = window.location.pathname;
var split = path.split("/")
var id = split[3];

class EditProfil extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/users/${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    infos: result
            });
        })
    }

    submitform = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch(`http://localhost:8000/api/update/user/${id}`, {
          method: 'POST',
          body: data,
        })
    }

    handleChange(event) {
        this.setState({infos: event.target.value});
    }
    
    render(){
        return(
            <div className="mt-5">
                <h1 className="text-primary">Update Account</h1>
                <form className="col-5 container text-center p-5" onSubmit={(e) => this.submitform(e)}>
                    <label className="text-danger">Change Pseudo</label>
                    <input type="text" name="pseudo" className="form-control col-6 container" value={this.state.infos.pseudo} onChange={this.handleChange} require/>
                    <label className="text-danger">Change Email</label>
                    <input type="email" name="email" className="form-control col-6 container" value={this.state.infos.email} onChange={this.handleChange} require/>
                    <label className="text-danger">Change Password</label>
                    <input type="password" name="password" className="form-control col-6 container" value={this.state.infos.password} onChange={this.handleChange} require/>

                    <input type="submit" className="btn btn-primary mt-3" value="Confirm"/>
                </form>
            </div>
        )
    }    
}

export default EditProfil;