const Lyrics = ({ lyrics, title }) => {
  return (
    <section className='grid min-h-screen p-8'>
      <div className='relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2'>
        <h3 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700'>
          {title.toUpperCase()}
        </h3>
        <blockquote className='whitespace-pre-wrap block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500 '>
          {lyrics.lyrics}
        </blockquote>
      </div>
    </section>
  );
};

export default Lyrics;
