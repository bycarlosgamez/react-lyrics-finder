import { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDEtails';

const SongSearcher = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  return (
    <div>
      SongSearcher <SongForm /> <SongDetails />
    </div>
  );
};

export default SongSearcher;
