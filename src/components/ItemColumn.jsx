import React from 'react'
import Tilt from 'react-parallax-tilt'

function ItemColumn({ title, desc, img, imageBorderRadius }) {
  return (
    <Tilt>
      <div className="flex flex-col bg-white transition-all dark:bg-zinc-800 rounded-lg p-5 shadow-md hover:shadow-lg border-2 dark:border-none">
        <div
          className={`h-40 self-center overflow-hidden ${imageBorderRadius || ''
            }`}
        >
          <img className="object-contain w-full h-full" src={img} alt={title} />
        </div>
        <h4 className="text-5xl sm:text-2xl text-slate-800 dark:text-zinc-300 font-semibold mt-3">
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
