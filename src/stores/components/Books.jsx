import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
  
    const firstfiveImages = booksData.slice(0,5)


  return (
    <>
    <h2>Books</h2>
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

export default Books