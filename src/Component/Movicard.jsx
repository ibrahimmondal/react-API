import React from 'react'

function Movicard({item}) {
    const { original_title, overview, poster_path, vote_average} = item;

    const MOVIES_IMG = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <a href="#" className="group relative block bg-black mb-5">
  <img
    alt=""
    src={MOVIES_IMG}
    className="absolute inset-0 h-full w-full object-bottom object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{vote_average.toFixed(1)}</p>

    <p className="text-xl font-bold text-white sm:text-2xl">{original_title}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
         {overview.slice(0, 150)}....
        </p>
      </div>
    </div>
  </div>
</a>
  )
}

export default Movicard