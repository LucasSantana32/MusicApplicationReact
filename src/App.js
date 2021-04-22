import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Lucky You (Feat. Joyner Lucas)",
      artist: "Eminem",
      img_src: "./images/song-1.jpg",
      src: "./music/Lucky You (Feat. Joyner Lucas) [Official Audio].mp3"
    },
    {
      title: "Happier (Feat. Bastille)",
      artist: "Marshmello",
      img_src: "./images/song-2.jpg",
      src: "./music/Marshmello ft. Bastille - Happier.mp3"
    },
    {
      title: "Split (Feat. PEEWEE LONGWAY)",
      artist: "Brodinski",
      img_src: "./images/song-3.jpg",
      src: "./music/Brodinski Feat. Peewee Longway Split (RSHH Exclusive - Official Audio).mp3"
    },
    {
      title: "GOKU",
      artist: "Jaden Smith",
      img_src: "./images/song-4.jpg",
      src: "./music/Jaden Smith - GOKU.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
