
import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    const firstfiveImages = watchData.slice(0,5)
    return (
        <>
        <h2>Kitchen</h2>
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

export default Watch