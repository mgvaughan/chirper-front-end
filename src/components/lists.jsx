import React from 'react';

const MyCustomList = props => {
    return (
        <>
            <h1>{props.username}</h1>
            <h1>{props.chirp}</h1>
        </>
    )
}

export default MyCustomList;