import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const onChange = (e) => {
        if(e.target.name === 'username') {
            setUsername(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }
    const onClick = () => {
        setPasswordVisible(!passwordVisible)
    }
    const onLogin = (e) => {
        const loginCredentials = { username: `${username}`, password: `${password}`}
        
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', loginCredentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/friendslist')
        })
        .catch(err => console.error(err))
    }
    return (
        
        <div className='login'>
            <h1>LOGIN</h1>
            <form onSubmit={onLogin}>
                <h4>USERNAME</h4>
                <input type='text' name='username' value={username} onChange={onChange}/>
                <h4>PASSWORD</h4>
                <input type={passwordVisible ? 'text' : 'password'} name='password' value={password} onChange={onChange}/>
                <label>Show Password
                <input type='checkbox' name='passwordVisible' value={passwordVisible} onChange={onClick}/>
                </label>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
        
}