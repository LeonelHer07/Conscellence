import React from 'react'

const Cards = ({num, head, text}) => {
  return (
    <div className='w-[394px] h-[312px] rounded-3xl flex flex-col pt-[40px]
    pl-[40px] pr-[40px] border-1 border-gray-500'>
        <div className='mb-[16px] text-[20px] text-blue-600'>{num}</div>
        <div className='mb-[16px] text-[24px] text-slate-900'>{head}</div>
        <div className='text-[18px] text-slate-600'>{text}</div>
    </div>
  )
}

export default Cards