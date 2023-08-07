import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Logout () {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/logout', token , {headers: {authorization: token}})
        .then(res => {
            if(res.data.token === token) {
                localStorage.removeItem('token')
                navigate('/')
            }
        })
        .catch(err => console.error(err))
    })
    return (
        <div>LOGGING OUT...</div>
    )
}