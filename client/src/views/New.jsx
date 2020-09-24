import React, {useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import CrabForm from '../components/Crabform';


const New = props => {
    const initialCrab = {
        name:"",
        spaceShip:"",
        weaponOne:"",
        weaponTwo:"",
        weaponThree:""
    }

    const [crab,setCrab] = useState(initialCrab);

    const [errors,setErrors] = useState(initialCrab);

    const handleInputChange = (e) => {
        setCrab({
            ...crab,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialCrab);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/crab", crab)
            .then(res => {
                console.log(res.data)
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h2>Create a Crab:</h2>
            <CrabForm 
                inputs={crab}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create a Crab"
            />
        </div>
    );
}

export default New;