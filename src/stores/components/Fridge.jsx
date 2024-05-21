

import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
 
    const firstfiveImages = fridgeData.slice(0,5)


  return (
    <>
    <h2>Fridges</h2>
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

export default Fridge