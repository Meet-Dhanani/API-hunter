import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [addData, addinputDtat] = useState([])

    const navigate = useNavigate();

    const handle = (e) => {
        axios.post('http://localhost:4000/posts', addData).then(res => {
            // console.log(res);
            navigate('/');
        })
    }

    return (

        <center>
            {/* <form onSubmit={handle}> */}
            <div className='my-3'>
                <input type="text" onChange={(e) => addinputDtat({ ...addData, name: e.target.value })} />
            </div>
            <div>
                <input type="email" onChange={(e) => addinputDtat({ ...addData, email: e.target.value })} />
            </div><br />
            <button onClick={handle} className='btn btn-info'>Submit</button>
            {/* </form> */}
        </center>

    )
}

export default Add