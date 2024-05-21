import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'

const AcPAge = () => {

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className='pageSection'>
        {
        acData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt=''/>
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default AcPAge