import React, { Component } from 'react'
import UserService from '../services/UserService'
import { Link } from "react-router-dom";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

    }

    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    addUser() {
        //this.props.history.replace('/add-user/_add');
        this.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <Link className="btn btn-primary" to='/add-user/_add'> Add User</Link>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User First Name</th>
                                <th> User Observation</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.name} </td>
                                            <td> {user.obs}</td>
                                            <td>
                                                <Link to={'/add-user/' + user.id} className="btn btn-primary">Update </Link>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                <Link style={{ marginLeft: "10px" }} to={'/view-user/' + user.id} props={user} className="btn btn-success">View </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListUserComponent
