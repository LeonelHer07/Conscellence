import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import Heading from "./Heading"

const sectionfour = () => {


  return (
    <div className='py-[120px] pl-[320px] pr-[24px]'>
      <Heading />

      <div className='flex gap-[8px] my-[40px] overflow-x-auto'>
        <Cards 
          parrafo="Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities. Thanks to their expertise, we achieved record-breaking sales last quarter." 
          foot="Michael Thompson, Founder of EcoGreen Solutions"
        />
          <Cards 
          parrafo="Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities. Thanks to their expertise, we achieved record-breaking sales last quarter." 
          foot="Michael Thompson, Founder of EcoGreen Solutions"
        />
          <Cards 
          parrafo="Working with Conscellence was a game-changer for us. Their market analysis and insights helped us navigate challenging market conditions and seize new opportunities. Thanks to their expertise, we achieved record-breaking sales last quarter." 
          foot="Michael Thompson, Founder of EcoGreen Solutions"
        />
        
      </div>

      <div >
        <a href="/"><i className="bi bi-arrow-left text-white text-[30px] mr-[20px]"></i></a>
        <a href="/"><i className="bi bi-arrow-right text-white text-[30px]"></i></a>
      </div>

    </div>
  )
}

export default sectionfour