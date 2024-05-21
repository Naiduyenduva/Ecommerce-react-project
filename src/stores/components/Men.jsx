
import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstfiveImages = menData.slice(0,5)
    return (
        <>
        <h2>Men</h2>
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
export default Men