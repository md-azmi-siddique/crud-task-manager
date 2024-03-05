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

    return (
        <div>
            <h1>CRUD</h1>
            <div className="crud">
                {crud.map(crudOp=>(
                    <div className="crud" key={crudOp.id}>
                        <h2>{crudOp.title}</h2>
                        <p>{crudOp.descriprion}</p>
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
