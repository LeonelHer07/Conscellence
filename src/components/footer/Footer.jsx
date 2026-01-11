import React from 'react'
import Logo from "../../assets/Logow.svg"

const Footer = () => {
  return (
    <div className='flex justify-between px-[80px] py-[24px] bg-[#1E293B]'>
        <img src={Logo} alt="" />
        <span className='self-center text-white text-[16px] font-light'>All rights reserved © 2024 Cons Consulting.  Privacy Policy | Terms of Service</span>
    </div>
  )
}

export default Footer