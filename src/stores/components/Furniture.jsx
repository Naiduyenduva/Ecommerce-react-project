

import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
 
    const firstfiveImages = furnitureData.slice(0,5)


  return (
    <>
    <h2>Furniture</h2>
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

export default Furniture