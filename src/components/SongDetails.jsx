import Artist from './Artist';
import Lyrics from './Lyrics';
import Message from './Message';

const SongDetails = ({ search, artist, lyrics }) => {
  // if (!lyrics || !artist) return;
  // console.log(artist.artists[0].strArtist, lyrics.lyrics);
  console.log(artist);

  return (
    <>
      {!artist || artist === undefined ? (
        <Message
          msg={`Error: we can't find artist ${search.artist}`}
          bgColor={'#ef4444'}
        />
      ) : lyrics.lyrics === undefined || !lyrics ? (
        <div>
          <Message msg={`Error: lyrics not found`} bgColor={'#ef4444'} />
          <Artist artist={artist} />
        </div>
      ) : (
        <div>
          <Lyrics lyrics={lyrics} />
          <Artist artist={artist} />
        </div>
      )}
    </>
  );
};

export default SongDetails;
