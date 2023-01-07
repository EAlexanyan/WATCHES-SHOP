import React, { useState } from 'react'
import './Item.css'

function Item({id, tit, price, img, onClickAdd}) {
  const [isAdded, setIsAdded] = useState(false)

  const omClickAdd = () => {
    onClickAdd({ id, tit, price, img})
    setIsAdded(!isAdded)
  }

  return (
    <div className='item'>
        <div className='decript'>
           <h2>{tit}</h2>
           <p>from ${price}</p>
           <h3>{id}</h3>
           <button className={isAdded ? 'activeAdd' : 'addCart'} onClick={omClickAdd}>ADD TO CART</button>
        </div>

        <div className='imgDiv'>
            <img src={img} />
        </div>
    </div>
  )
}

export default Item