import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='middle'>
            <p>ABOUT US</p>
            <p>DELIVERY INFORMATION</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS and CONDITIONS</p>
        </div>

        <div className='middle'>
            <p>MY ACCOUNT</p>
            <p>MY ADDRESSES</p>
            <p>MY CART</p>
            <p>ORDER HISTORY</p>
        </div>

        <div className='middle'>
            <p>MY COMPANY</p>
            <p>GLASGOW D04 89GR</p>
            <p>800-2345-6789</p>
            <p>INFO@DEMOLINK.ORG</p>
        </div>

        <div className='formInp'>
             <form>
                <input type='text' placeholder='Enter your email' />
                <button><i class="fa-solid fa-arrow-right"></i></button>
             </form>
        </div>
    </div>
  )
}

export default Footer