

import React from 'react'
import {womanData} from '../data/woman'

const Women = () => {
    const firstfiveImages = womanData.slice(0,5)
    return (
        <>
        <h2>Women</h2>
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

export default Women