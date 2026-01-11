import React from 'react'

function Cards({parrafo, foot}) {
  return (
    <div className='group w-[360px] h-[390px] border-2 rounded-[45px] p-[40px] text-[14px] text-white hover:bg-blue-600 hover:text-white'>
        <span className='text-[35px] text-blue-600 group-hover:text-white'>
          "
        </span><br />

        <span>
          {parrafo}
        </span><br /> <br />

        <span className='text-[12px]'>
          {foot} 
        </span>
    </div>
  )
}

export default Cards