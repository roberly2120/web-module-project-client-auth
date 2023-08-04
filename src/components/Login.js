import React, { useState } from "react";
import axios from "axios";

export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e) => {
        if(e.target.name === 'username') {
            setUsername(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }
    const onLogin = (e) => {
        const loginCredentials = { username: `${username}`, password: `${password}`}
        
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', loginCredentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='login'>
            <h1>LOGIN</h1>
            <form onSubmit={onLogin}>
                <label>USERNAME
                <input type='text' name='username' value={username} onChange={onChange}/>
                </label>
                <label>PASSWORD
                    <input type='text' name='password' value={password} onChange={onChange}/>
                </label>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}