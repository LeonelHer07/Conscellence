import React from 'react'
import Cards from './Cards'
import Header from './Header'
import Cardtwo from './Cardtwo'

const Sectiontwo = () => {
  return (
    <div className=' mb-[120px] flex flex-col items-center mx-[24px]'>
        <Header />
        <Cards 
        rounded = "rounded-t-[60px]"
        title="Customized Strategy Development" 
        parrafo="Tailor-made strategies to address your unique business challenges and opportunities, ensuring sustainable growth and competitive advantage." />

        <Cards 
        title="Operational Efficiency Optimization" 
        parrafo="Streamline your processes and improve efficiency with our expert guidance, helping you save time and resources." />
        <Cards 
        title="Market Analysis and Insights" 
        parrafo="Gain valuable market insights and stay ahead of the competition with our comprehensive analysis and data-driven recommendations." />
        <Cards 
        title="Leadership and Team Building" 
        parrafo="Enhance your leadership capabilities and foster a high-performing team through our specialized training and development programs." />

        <Cardtwo />
        
        
    </div>
  )
}

export default Sectiontwo