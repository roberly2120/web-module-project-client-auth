import React, { useState } from "react";
import axios from "axios";




export default function AddFriend  () {
    const [friendName, setFriendName] = useState('');
    const [friendEmail, setFriendEmail] = useState('');
    const [friendAge, setFriendAge] = useState(null);
    const [errors, setErrors] = useState({ageError: ''});

    const onChange = (e) => {
        if(e.target.name === 'friend-name'){
            setFriendName(e.target.value);
        }
        else if(e.target.name === 'friend-email') {
            setFriendEmail(e.target.value);
        }
        else if(e.target.name === 'friend-age') {
            setErrors({ageError: ''});
            if(typeof friendAge != 'number') {
                setErrors({ageError: 'age must be a number'});
            }
            setFriendAge(e.target.value);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const newFriend = {
            id: Date.now(),
            name: friendName,
            age: friendAge,
            email: friendEmail
        }
        axios.post('http://localhost:9000/api/friends', newFriend, {headers: {authorization: token}})
        .then(res => {
            setFriendEmail('');
            setFriendName('');
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>ADD FRIEND</h1>
            <h3 className="errors">{errors.ageError}</h3>
            <form className='add-friend' onSubmit={onSubmit}>
                <h4>FRIEND NAME</h4>
                <input type ='text' value={friendName} name='friend-name' onChange={onChange}/>
                <h4>FRIEND EMAIL</h4>
                <input type='text' value={friendEmail} name='friend-email' onChange={onChange}/>
                <h4>FRIEND AGE</h4>
                <input type='text' value={friendAge} name={'friend-age'} onChange={onChange} />
                <button disabled={friendEmail && friendName && friendAge && !errors.ageError ? false : true}type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}