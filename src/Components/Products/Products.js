import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './Products.css'

function Products({itemInfo, setItemInfo, itemAddClick, searchInput}) {
  const [err, setErr] = useState('')
  

  useEffect(() => {
     axios.get('https://63b893206f4d5660c6d9fcfa.mockapi.io/products')
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
            itemInfo.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).map((el, i) => <Item key={i} id={el.id.toString()} tit={el.title} price={el.price} img={el.image} onClickAdd={(obj) => itemAddClick(obj)}/>)
          }
       </div>
    </div>

  )
}

export default Products