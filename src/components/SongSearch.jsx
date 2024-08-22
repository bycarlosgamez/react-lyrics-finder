import { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDEtails';
import Loader from './Loader';

const SongSearcher = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <div>
      SongSearcher
      {isLoading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyrics={lyrics} artist={artist} />
    </div>
  );
};

export default SongSearcher;
