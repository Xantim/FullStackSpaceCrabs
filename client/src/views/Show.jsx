import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';


const Show = props => {
    const [crab,setCrab] = useState({
        name:"",
        spaceShip:"",
        weaponOne:"",
        weaponTwo:"",
        weaponThree:""
    });
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/crab/${props.id}`)
            .then(res => setCrab(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const destroyCrab = () => {
        Axios.delete(`http://localhost:8000/api/destroy/crab/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="mx-auto p-5 col-12 bg-dark text-warning">
            <h2>{crab.name}</h2>
            <p>Space Ship: {crab.spaceShip}</p>
            <h3>Weapons: </h3>
            <ul className="list-group text-danger">
                <li className="list-group-item">{crab.weaponOne}</li>
                <li className="list-group-item">{crab.weaponTwo}</li>
                <li className="list-group-item">{crab.weaponThree}</li>
            </ul>
            <button className="btn btn-danger btn-outline-warning m-3" onClick={destroyCrab}>Destroy {crab.name}</button>

        </div>
    )
}

export default Show;