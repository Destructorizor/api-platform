import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiList = () => {
    cont [ApiList, setApiList] = userState([]);
        
        userEffect(() => {
            axios.get('http://localhost:3000/api/list')
            .then((response) => {
                setApiList(response.data);
            })
        })
        .catch((error) => {
            console.error('Error fetching API list:', error);

        })
}

return (
    <div>
        <h2>API List</h2>
        <ul>
            {ApiList.map((api) => (
                <li key={api.id}>
                    <strong>{api.title}</strong>
                    <p>{api.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default ApiList;
