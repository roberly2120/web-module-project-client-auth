import React, {useEffect, useState} from "react";
import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";


export default function FriendsList () {
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends' , {headers: {authorization: token}})
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <h1>Friends List</h1>
            <ul className="friends">
                {friends.map((friend) => <li key={friend.id}>- {friend.name} - {friend.email}</li>)}
            </ul>
        </div>
    )
}