import Artist from './Artist';
import Lyrics from './Lyrics';
import Message from './Message';

const SongDetails = ({ search, artist, lyrics }) => {
  // if (!lyrics || !artist) return;
  // console.log(artist.artists[0].strArtist, lyrics.lyrics);

  return (
    <>
      {!artist || artist === undefined ? (
        <Message
          msg={`Error: we can't find artist ${search.artist}`}
          bgColor={'#ef4444'}
        />
      ) : lyrics.lyrics === undefined || !lyrics ? (
        <>
          <div className='overflow-x-auto rounded-lg p-3'>
            <Artist artist={artist} />
          </div>
          <Message msg={`Error: lyrics not found`} bgColor={'#ef4444'} />
        </>
      ) : (
        <div className='overflow-x-auto rounded-lg p-3 divide-y'>
          <Artist artist={artist.artists[0]} />
          <Lyrics lyrics={lyrics} title={search.song} />
        </div>
      )}
    </>
  );
};

export default SongDetails;
