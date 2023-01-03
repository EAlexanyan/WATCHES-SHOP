import React, { useEffect, useState, Children, cloneElement } from 'react'
import './Slider.css'

function Slider({children}) {
 const [pages, setPages] = useState([])
 const [offset, setOffset] = useState(0)

 const handleClickLeft = () => {
    console.log('handleClickLeft');
    setOffset((nw) => {
        const newOffset = nw + 450

        return Math.min(newOffset, 0) 
    })
 }

 const handleClickRight = () => {
    console.log('handleClickRight');
    setOffset((nw) => {
        const newOffset = nw - 450

        return Math.max(newOffset, -900)
    })
 }

 useEffect(() => {
    setPages(
        Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    height: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                },
            })
        })
    )
 }, [])


  return (
    <div className='slideAll'>

        <div className='dec'>
            <h3>SHOP OUR COLLECTION</h3>
            <h4>OF DESIGNER WATCHES FOR WOMEN MEN</h4>
            <p>Watch Station creates the most appealing and dynamic shopping
            experience in the world of iconic watch brands.
            We curate the watch world by creating amazing stories about brands,
            platforms, trends and watch culture. We strive to create personalconnections.
            experience in the world of iconic watch brands.
            We curate the watch world by creating amazing stories about brands,
            platforms, trends and watch culture. We strive to create personalconnections.
            experience in the world of iconic watch brands.
            We curate the watch world by creating amazing stories about brands,
            platforms, trends and watch culture. We strive to create personalconnections.</p>
        </div>

        <div className='container'>
                <div className='window'>
                     <div className='all-items'
                     style={{
                         transform: `translateX(${offset}px)`
                        }}
                     >{pages}
                     </div>
                </div>
            <span className='arrowLeft' onClick={handleClickLeft} >{'<'}</span>
            <span className='arrowRight' onClick={handleClickRight} >{'>'}</span>
        </div>
    </div>
  )
}

export default Slider