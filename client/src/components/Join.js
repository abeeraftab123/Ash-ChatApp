import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Using react hooks

const Join=() => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
   
    return (
        <h1>Join</h1>
    )
}

export default Join;
    