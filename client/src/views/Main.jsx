import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from '@reach/router'


const Main = props => {

    const [crabs, setCrabs] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/crabs")
            .then(res => {
                console.log(res.data)
                setCrabs(res.data.results)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <table className="table table-danger mx-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Space Ship</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    crabs.map((c,i) => {
                        return <tr key={i}>
                            <td>{c.name}</td>
                            <td>{c.spaceShip}</td>
                            <td>
                                <Link to={`/edit/${c._id}`} className="btn btn-info">Edit</Link>
                                <Link to={`/crab/${c._id}`} className="btn btn-warning">Show</Link>
                            </td>
                            
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Main;