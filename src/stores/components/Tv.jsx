
import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const firstfiveImages = tvData.slice(0,5)
    return (
        <>
        <h2>TV</h2>
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

export default Tv