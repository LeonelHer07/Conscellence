import React from 'react'
import Logo from "../../assets/LogoApproach.svg"
import { div } from 'framer-motion/client'

const Left = () => {
  return (

    <div className='relative text-[64px] w-[560px]'>
        <div className='absolute w-[560px]'>
            <div className='flex gap-[240px]'>
                <h2>OUR</h2>
                <i className="bi bi-arrow-down-right"></i>
            </div>
            <h2>APPROACH</h2>
        </div>


        <div className='absolute w-[500px] top-25 left-5'>
            <img src={Logo} alt="" />
        </div>
    
    </div>
        
        
        
  )
}

export default Left