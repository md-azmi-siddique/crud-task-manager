import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [crud, setCrud] = useState({
        title:"",
        description:"",
        coverPic:""
    });

    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const crudId = location.pathname.split("/")[2];

    const handleChange =(e) =>{
        setCrud(prev =>({...prev, [e.target.name] : e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:4000/api/tasksUpdate/${crudId}`, crud)
            navigate("/")
        }catch(err){
            console.log(err)
            setError(true)
        }
    }

    console.log(crud)

    return (
        <div>
            <h1>Update</h1>
            <input class="input input-bordered join-item" placeholder="title" onChange={handleChange} name='title'/>
            <input class="input input-bordered join-item" placeholder="des" onChange={handleChange} name='description'/>
            <input class="input input-bordered join-item" placeholder="des" onChange={handleChange} name='coverPic'/>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default Update;