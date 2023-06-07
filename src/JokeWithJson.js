import React, { useState } from 'react';

function JokeComponent() {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke', true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const formattedJoke = `${response.setup} ${response.punchline}`;
        setJoke(formattedJoke);
      }
    };

    xhr.onerror = function () {
      console.error('Error fetching joke from the API.');
    };

    xhr.send();
  };

  return (
    <div className='randomJoke'>
      <button onClick={fetchJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default JokeComponent;
