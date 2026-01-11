import React, { useState } from 'react'

const Toggle = ({tittle, content}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='text-white'>
      <div 
        className='flex border-b-2 justify-between py-[40px] text-[20px]'
        
      >
        <h3>{tittle}</h3>
        {/* Cambia el ícono dependiendo del estado */}
       
        <i className={`bi ${open ? "bi-arrow-up-right" : "bi-arrow-down-right"} cursor-pointer`} onClick={() => setOpen(!open)}></i>
      
      </div>

      {open && (
        <div className='py-[16px] text-[18px] font-light'>
          {content}
        </div>
      )}
    </div>
  )
}

export default Toggle
