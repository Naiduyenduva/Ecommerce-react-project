

import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {

    const firstfiveImages = acData.slice(0,5)


  return (
    <>
    <h2>AirConditioners</h2>
     <div className='proSection'>
        {
            firstfiveImages.map((item)=>{
                return(
                    <div className='imageBox'>
                        <img className='proImage' src={item.image} alt=''/>
                        <h2>{item.model}</h2>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Ac