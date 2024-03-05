import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [crud, setCrud] = useState({
        title:"",
        description:"",
        coverPic:""
    });

    const navigate = useNavigate()

    const handleChange =(e) =>{
        setCrud(prev =>({...prev, [e.target.name] : e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:4000/api/tasksPost", crud)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(crud)

    return (
        <div>
            <h1>ADD</h1>
            <input class="input input-bordered join-item" placeholder="title" onChange={handleChange} name='title'/>
            <input class="input input-bordered join-item" placeholder="des" onChange={handleChange} name='description'/>
            <input class="input input-bordered join-item" placeholder="des" onChange={handleChange} name='coverPic'/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add;