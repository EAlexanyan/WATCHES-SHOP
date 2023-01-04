import React from 'react'
import './Item.css'

function Item(props) {
  return (
    <div className='item'>
        <div className='decript'>
           <h2>{props.tit}</h2>
           <p>from ${props.price}</p>
           <button>ADD TO CART</button>
        </div>

        <div className='imgDiv'>
            <img src={props.img} />
        </div>
    </div>
  )
}

export default Item