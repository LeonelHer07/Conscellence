import React from 'react'

const Cards = ({title,parrafo,rounded}) => {
  return (
    <div className={`w-full bg-slate-900 px-[80px] py-[56px] flex text-white gap-[80px] border-b-2 ${rounded}`}>
        <div className=''>
            <i className="bi bi-arrow-down-right text-[24px]"></i>
        </div>

        <div className='w-[1128px] flex gap-[80px]'>
            <h2 className='w-[524px] text-[40px]'>{title}</h2>
            <p className='w-[524px] text-[18px]'>{parrafo}</p>
        </div>
    </div>
  )
}

export default Cards