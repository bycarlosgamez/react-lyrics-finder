import React from 'react';

const Artist = () => {
  return (
    <section className='grid min-h-screen p-8 place-items-center'>
      <div className='container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2'>
        <div className='relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2'>
          <div className='relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0'>
            <img
              src='https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg'
              alt='Revolutionizing Our Production Process'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='p-6 px-2 sm:pr-6 sm:pl-4'>
            <p className='block antialiased font-sans text-sm leading-normal text-inherit mb-4 font-semibold'>
              Technology
            </p>
            <a
              href='#'
              className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700'
            >
              Revolutionizing Our Production Process
            </a>
            <p className='block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500'>
              Learn how our recent investment in new technology has
              revolutionized our production process, leading to improved
              efficiency and product quality.
            </p>
            <div className='flex items-center gap-4'>
              <img
                src='https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg'
                className='inline-block relative object-cover object-center rounded-full w-12 h-12'
              />
              <div>
                <p className='block antialiased font-sans text-base eading-relaxed text-blue-gray-900 mb-0.5 font-semibold'>
                  John Doe
                </p>
                <p className='block antialiased font-sans text-sm leading-normal text-gray-700 font-normal'>
                  2022-08-15
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
