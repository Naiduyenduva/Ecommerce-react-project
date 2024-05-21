import React from 'react';
import { booksData } from '../stores/data/books';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';


const BookSingle = () => {
    const {id} = useParams()


   const product = booksData.find((item) => item.id===id)

    console.log(id)
  return (
   <>
   <Navbar />
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
            <div className="ind-company">
                <h2>{product.title}</h2>
            </div>
        <div className="ind-model">
            <h3>{product.author}</h3>
        </div>
        <div className="ind-price">
            <h2>{product.price}</h2>
        </div>
        <div className="ind-des">
            <p>{product.description}</p>
        </div>
        <button>Add to Cart</button>
        </div>
    </div>
   </>
  )
}

export default BookSingle