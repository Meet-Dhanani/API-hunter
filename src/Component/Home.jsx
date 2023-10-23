import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((res) => {
            setdata(res.data);
            console.log(res);
        });
    }, []);

    const DeleteData = (id) => {
        axios.delete(`http://localhost:4000/posts/${id}`).then((res) => {
                setdata(data.filter(dele => dele.id !== id));
                // console.log(res.data);
            })
    };

    return (

        <div className='container mt-5'>
            <center>
                <Link to="/Add" className='btn btn-primary mb-5'>Add</Link>
            </center>
            {data.map((e, ind) => {
                return (
                    <>
                        <div className='d-flex justify-content-between mb-3'>
                            <h5>{e.name}</h5>
                            <h5>{e.email}</h5>
                            <div>
                                <Link to={`/Update/${e.id}`} className='btn btn-primary me-3'>Edit</Link>
                                <button className='btn btn-danger' onClick={() => DeleteData(e.id)}>Delete</button>
                            </div>
                        </div>
                        <hr/>
                    </>
                );
            })}
        </div>
    );
}

export default Home