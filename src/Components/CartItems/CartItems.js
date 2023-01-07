import React from 'react'
import './CartItems.css'

function CartItems({ img, tit, price, removeItemCart}) {
  
  return (
    <div className='cartItems'>
            <img src={img} alt='' />

            <div className='descCartIrem'>
                <h3>{tit}</h3>
                <p>{price}$</p>
            </div>

            <span onClick={removeItemCart}>X</span>
    </div>
  )
}

export default CartItems