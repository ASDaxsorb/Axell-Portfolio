import React from 'react'
import Tilt from 'react-parallax-tilt'

function ItemColumn({ title, desc, img }) {
  return (
    <Tilt>
      <div className="flex flex-col bg-white transition-all dark:bg-zinc-800 rounded-lg p-5 shadow-md hover:shadow-lg border-2 dark:border-none">
        <img className="d-block sm:h-40 object-contain" src={img} alt={title} />
        <h4 className="text-5xl sm:text-2xl text-slate-800 dark:text-zinc-300 font-semibold">
          {title}
        </h4>
        <p className="text-slate-500 dark:text-zinc-300 mt-4 sm:mt-3 text-3xl sm:text-xl">
          {desc}
        </p>
      </div>
    </Tilt>
  )
}

export default ItemColumn
