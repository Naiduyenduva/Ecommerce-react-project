import React from 'react'
import Mobiles from './Mobiles'
import Ac from './Ac'
import Computers from './Computers'
import Books from './Books'
import Women from './Women'
import Watch from './Watch'
import Tv from './Tv'
import Kitchen from './Kitchen'
import Speaker from './Speaker'
import Men from './Men'
import Furniture from './Furniture'
import Fridge from './Fridge'

const Products = () => {
  return (
    <div className='products'>
      <Mobiles />
      <Computers />
      <Men />
      <Furniture />
      <Fridge />
      <Books />
      <Watch />
      <Tv />
      <Kitchen />
      <Speaker />
      <Ac />
      <Women />
    </div>

  )
}

export default Products