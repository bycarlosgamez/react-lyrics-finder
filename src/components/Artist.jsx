import React from 'react';

const Artist = ({ artist }) => {
  console.log(artist);
  return (
    <section className='grid min-h-screen p-8 place-items-center'>
      <div className='container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2'>
        <div className='relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2'>
          <div className='relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0 h-fit'>
            <img
              src={artist.strArtistThumb}
              alt='Revolutionizing Our Production Process'
              className='object-cover w-full'
            />
          </div>
          <div className='px-2 sm:pr-6 sm:pl-4'>
            {/* <p className='block antialiased font-sans text-sm leading-normal text-inherit mb-4 font-semibold'>
              Technology
            </p> */}
            <a
              href='#'
              className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700'
            >
              {artist.strArtist}
            </a>
            <p className='block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500'>
              {artist.strBiographyEN}
            </p>
            <div className='flex items-center gap-4'>
              {/* <img
                src={}
                className='inline-block relative object-cover object-center rounded-full w-12 h-12'
              /> */}
              <div>
                <p className='block antialiased font-sans text-base eading-relaxed text-blue-gray-900 mb-0.5 font-semibold'>
                  {artist.strGenre}
                </p>
                <p className='block antialiased font-sans text-sm leading-normal text-gray-700 font-normal'>
                  {artist.strCountry}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
