import { useState, useEffect } from 'react';
import axios from 'axios';
import SongForm from './SongForm';
import SongDetails from './SongDEtails';
import Loader from './Loader';

const SongSearcher = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songtUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const headers = {
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
      };

      const controller = new AbortController();

      setIsLoading(true);

      const [artistRes, songRes] = await Promise.all([
        axios
          .get(artistUrl, headers, { signal: controller.signal })
          .then((res) => res.data)
          .catch((err) => err.response),
        axios
          .get(songtUrl, { signal: controller.signal })
          .then((res) => res.data)
          .catch((err) => err.response),
      ]);

      setArtist(artistRes);
      setLyrics(songRes);
      setIsLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
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
