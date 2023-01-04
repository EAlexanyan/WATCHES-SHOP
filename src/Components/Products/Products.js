import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './Products.css'

function Products({itemInfo, setItemInfo}) {
  const [err, setErr] = useState('')

  useEffect(() => {
     axios.get('https://fakestoreapi.com/products')
     .then((respons) => {            
       setItemInfo([
        ...itemInfo,
        ...respons.data
      ])

     }).catch(err => {
        setErr(err.message)
     })
     
  }, [])
  
  return (
    <div className='alll'>
      <div className='title'>
        <h2>CHOOSE COLLECTIONS</h2>
      </div>

       <div className='products'>
          {
            itemInfo.map((el, i) => <Item key={i} id={el.id.toString()} tit={el.title.slice(0, 30)} price={el.price} img={el.image} />)
          }
       </div>
    </div>

  )
}

export default Products