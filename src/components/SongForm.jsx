import { useState } from 'react';

const initialFormState = {
  artist: '',
  song: '',
};

const SongForm = ({ handleSearch }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevFormState) => {
      return {
        ...prevFormState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.artist || !formState.song) {
      alert('Missing info');
      return;
    }

    handleSearch(formState);

    setFormState(initialFormState);
  };

  return (
    <form className='w-full bg-white shadow-md p-6' onSubmit={handleSubmit}>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-full px-3 mb-6'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
            htmlFor='artist_name'
          >
            Artsit Name
          </label>
          <input
            className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-cyan-600'
            id='artist_name'
            type='text'
            name='artist'
            placeholder='Artist Name'
            value={formState.artist}
            onChange={handleChange}
            required
          />
        </div>

        <div className='w-full md:w-full px-3 mb-6'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2'
            htmlFor='song_name'
          >
            Song Name
          </label>
          <input
            className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-cyan-600'
            id='song_name'
            type='text'
            name='song'
            placeholder='Song Name'
            value={formState.song}
            onChange={handleChange}
            required
          />
        </div>

        <div className='w-full md:w-full px-3 mb-6'>
          <input
            type='submit'
            value='Search'
            className='appearance-none block w-full bg-cyan-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-cyan-600 focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>
      </div>
    </form>
  );
};

export default SongForm;
