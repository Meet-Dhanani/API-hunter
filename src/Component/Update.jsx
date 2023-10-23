import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();

    const [upData, apinputDtat] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/posts/' + id).then((res) => {
            apinputDtat(res.data);
            // console.log(res);
        });
    }, [])


    const handle = (e) => {
        axios.put('http://localhost:4000/posts/' + id, upData).then(res => {
            // console.log(res);
            navigate('/')
        })
    }

    return (

        <center>
            {/* <form onSubmit={handle}> */}
            <div className='my-3'>
                <input type="text" value={upData.name} onChange={(e) => apinputDtat({ ...upData, name: e.target.value })} />
            </div>
            <div>
                <input type="email" value={upData.email} onChange={(e) => apinputDtat({ ...upData, email: e.target.value })} />
            </div><br />
            <button onClick={handle} className='btn btn-info'>Update</button>
            {/* </form> */}
        </center>
    )
}

export default Update