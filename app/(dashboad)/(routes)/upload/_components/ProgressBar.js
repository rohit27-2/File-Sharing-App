import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className='p-4'>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200"
  >
    
    <span
      className="block h-5 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-blue-400 to-blue-500"
      style={{width:`${progress}%`}}
    ><strong>{`${Number(progress).toFixed(0)}%`}</strong> </span>
      </span>
 </div>
    
  )
}

export default ProgressBar