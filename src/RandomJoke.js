import React, { useState } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState('');

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      const { setup, punchline } = data;
      const formattedJoke = `${setup} ${punchline}`;
      setJoke(formattedJoke);
    } catch (error) {
      console.error('Error fetching random joke:', error);
    }
  };

  return (
    <div className='randomJoke'>
      <button onClick={fetchRandomJoke}>Get Random Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default RandomJoke;
