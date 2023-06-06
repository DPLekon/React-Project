import React, { useEffect, useState } from 'react';

function RandomImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://api.rawg.io/api/games?key=61dcd91c11ab40d886ed55df48094732');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomGame = data.results[randomIndex];
      const { background_image } = randomGame;
      setImageUrl(background_image);
    } catch (error) {
      console.error('Error fetching random gaming image:', error);
    }
  };

  const handleButtonClick = () => {
    fetchRandomImage();
  };

  return (
    <div className='styleImg'>
      <img src={imageUrl} alt="Random Gaming" />
      <button onClick={handleButtonClick}>Get Random Gaming Image</button>
    </div>
  );
}

export default RandomImage;
