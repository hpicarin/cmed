import React, { Component } from 'react'
import UserService from '../services/UserService'
import { useSearchParams, useParams } from 'react-router-dom'


class ViewUserComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: 103,//this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        //let { id } = useParams();
        //console.log(id);
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View User Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Name: </label>
                            <div> {this.state.user.name}</div>
                        </div>
                        <div className="row">
                            <label> Observation: </label>
                            <div> {this.state.user.obs}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
