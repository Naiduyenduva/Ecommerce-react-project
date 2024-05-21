import React from 'react';
import { computerData } from '../stores/data/computers';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';


const ComputerSingle = () => {
    const {id} = useParams()


   const product = computerData.find((item) => item.id===id)

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
                <h2>{product.company}</h2>
            </div>
        <div className="ind-model">
            <h3>{product.model}</h3>
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

export default ComputerSingle