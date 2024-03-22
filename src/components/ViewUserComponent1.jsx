import React, { Component, useState, useEffect } from 'react'
import UserService from '../services/UserService'
import { useSearchParams, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function ForgotMpin() {
    const navigation = useNavigate();
    return (
        <button className="btn btn-danger" onClick={() => navigation("../")}>Cancel</button>
    );
}

function ViewUserComponent1() {
    let { id } = useParams();
    const [data, setData] = useState({ name: '', obs: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
        UserService.getUserById(id)
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []); // Empty dependency array to run the effect only once on mount  

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View User Details</h3>
                <div className="card-body">
                    <div className="row">                        
                        <label> Name: </label>
                        <div> {data.name}</div>
                    </div>
                </div>
                <ForgotMpin />
            </div>
        </div>
    )
}

export default ViewUserComponent1
