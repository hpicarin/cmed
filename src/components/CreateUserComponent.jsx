import React, { Component, useState, useEffect, useRef } from 'react'
import UserService from '../services/UserService';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

function CreateUser() {
    let { id } = useParams();
    const [data, setData] = useState({ name: '', obs: '' });
    const [name, SetName] = useState("");
    const [error, setError] = useState("");
    const [obs, SetObs] = useState("");
    const navigation = useNavigate();

    useEffect(() => {
        if (id === '_add') {
            return
        } else {
            UserService.getUserById(id)
                .then((result) => {
                    SetName(result.data.name);
                    SetObs(result.data.obs);
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }, []);

    const saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { name: name, obs: obs };
        console.log('user => ' + JSON.stringify(user));

        if (id === '_add') {
            UserService.createUser(user).then(res => {
                navigation("../");
            });
        } else {
            user = { id: parseInt(id), name: name, obs: obs };
            UserService.updateUser(user).then(res => {
                navigation("../");
            });
        }
    }

    return (
        <div>
            <div className="form-group">
                <label> First Name: </label>
                <input placeholder="First Name" name="name" className="form-control"
                    value={name || ""} onChange={e => SetName(e.target.value)} />
            </div>
            <div className="form-group">
                <label> Observation: </label>
                <input placeholder="Observation" name="obs" className="form-control"
                    value={obs || ""} onChange={e => SetObs(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-success" onClick={saveOrUpdateUser}>Save</button>
            <Link className="btn btn-danger" to='../' style={{ marginLeft: "10px" }}>Cancel</Link>
        </div>
    );
}

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
        let var_id = window.location.href.split('/')[4];
        this.state = {
            // step 2
            id: var_id,
            name: '',
            obs: ''
        }

        //this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount() {
        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    name: user.name,
                    obs: user.obs
                });
            });
        }
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <CreateUser />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUserComponent;
