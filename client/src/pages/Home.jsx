import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [crud, setCrud] = useState([]);

    useEffect(() => {
        const fetchAllTasks = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/tasks");
                // console.log(res);
                // Set the fetched data to the state or handle it as needed
                setCrud(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllTasks();
    }, []);

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`http://localhost:4000/api/tasksDelete/${id}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1>CRUD</h1>
            <div className="crud">
                {crud.map(crudOp=>(
                    <div className="crud" key={crudOp.id}>
                        <h2>{crudOp.title}</h2>
                        <p>{crudOp.description}</p>
                        <button className='delete' onClick={()=>{handleDelete(crudOp.id)}}>Delete</button>
                        <button className='update'><Link to={`/update/${crudOp.id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add New Task</Link>
            </button>
        </div>
    );
};

export default Home;
