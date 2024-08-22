import Artist from './Artist';
import Lyrics from './Lyrics';

const SongDetails = ({ search, artist, lyrics }) => {
  return (
    <div>
      SongDetails
      <Artist />
      <Lyrics />
    </div>
  );
};

export default SongDetails;
