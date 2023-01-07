import React from 'react'
import './NavBar.css'

function NavBar(props) {
  return (
    <div className='navBar'>
        <div className='navLogo'>
            <a href='#'>
               <h2>WATCHES</h2>
               <h3>ONLINE STORE</h3>
            </a>
        </div>

        <div className='navInput'>
            <form>
                <input onChange={props.onChangeInput} type='text' placeholder='Search store' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>
        </div>

        <div className='navSign'>
            <a href='!#' onClick={props.onClickCart}><i class="fa-solid fa-bag-shopping"></i></a>
             <a href='#'><i class="fa-solid fa-right-to-bracket"></i></a>                        
        </div>
    </div>
  )
}

export default NavBar