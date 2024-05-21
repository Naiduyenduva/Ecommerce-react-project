

import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
 
    const firstfiveImages = computerData.slice(0,5)


  return (
    <>
    <h2>Computers</h2>
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

export default Computers