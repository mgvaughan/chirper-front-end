import React, { useState } from 'react';
import MyCustomList from './components/lists';

const App = () => {
   
    const [username, setUsername] = useState('');

    const [chirp, setChirp] = useState('');

    const [chirpTimeline, setChirpTimeline] = useState([        
        {
            id: 1,
            username: '@Obi-wan Kenobi',
            chirp: 'Use the Force!'
        },
        {
            id: 2,
            username: '@Luke Skywalker',
            chirp: 'But I was going into Tosche Station to pick up some power converters!'
        },
        {
            id: 3,
            username: '@Din Djarin',
            chirp: 'This is the Way.'
        },
    ]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    
    const handleChirpChange = (e) => {
        setChirp(e.target.value);
    }
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        updateChirpTimeline();
        setUsername("");
        setChirp("");
    }

    function updateChirpTimeline() {
        const updateChirpTimeline = [... chirpTimeline, 
            {
                id: chirpTimeline + 1,
                username: "@" + username,
                chirp: chirp
            }   
        ];
        setChirpTimeline(updateChirpTimeline);
    }

    const myFancyList = chirpTimeline.map(val => {
        return (
            <div key={val.id}>
                <MyCustomList username={val.username} chirp={val.chirp}/>
            </div>
        );
    })

    return (
        <>
            <div>
                <input value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <input value={chirp} onChange={handleChirpChange} />
            </div>
            <div>
                <button onClick={handleButtonClick}>Chirp Me!</button>
            </div>
            <div>
                {myFancyList}
            </div>

        </>
    );
};

export default App;