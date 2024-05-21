import React from 'react'
import { mobileData } from '../data/mobiles'


const Mobiles = () => {

const firstfiveImages = mobileData.slice(0,5)


  return (
    <>
    <h2>Mobiles</h2>
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

export default Mobiles