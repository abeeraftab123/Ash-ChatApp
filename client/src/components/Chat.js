import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
//useEffect hook

const Chat=({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const endpoint = 'localhost:5000';  

    useEffect(() => {
        const { name,room } = queryString.parse(location.search);
        //console.log(name,room);

        socket = io(endpoint);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room});

        //console.log(socket);
    }, [endpoint, location.search]);

    return (
        <h1>Chat</h1>
    )
}

export default Chat;
    