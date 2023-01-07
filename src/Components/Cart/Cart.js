import React from 'react'
import CartItems from '../CartItems/CartItems'
import './Cart.css'

function Cart({ onClickX, items = [], setCartItems }) {

  const removeItemCart = (id) => {
    setCartItems((prev) => prev.filter(el => el.id !== id))
}

  return (
    <div  className='overly'>
         <div className='cart'>

          <div className='cartTop'>
            <h2>CART</h2>
            <span onClick={onClickX}>X</span>
          </div>
           {
            items.map((el, i) => <CartItems  key={i} id={el.id} tit={el.tit} price={el.price} img={el.img} removeItemCart={() => removeItemCart(el.id)}/>)
           } 
          </div>
    </div>
  )
}

export default Cart