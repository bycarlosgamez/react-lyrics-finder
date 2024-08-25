const Lyrics = ({ lyrics, title }) => {
  return (
    <div className='p-6 px-2 sm:pr-6 sm:pl-4'>
      <h3 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700'>
        {title.toUpperCase()}
      </h3>
      <blockquote className='whitespace-pre-wrap block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500 '>
        {lyrics.lyrics}
      </blockquote>
    </div>
  );
};

export default Lyrics;
