import React from 'react'
import './Recommended.css'
import Button from '../components/Button'
const Recommended = ({onClickHandler,handleClick}) => {
  return (
    <>
    <div>
      <h1 className='recommended-title'>Recommended</h1>
      <div className="recommended-flex">
        {/* <button className='btn'>All Products</button>
        <button className='btn'>Nike</button> 
        <button className='btn'>Adidas</button> 
        <button className='btn'>Puma</button>
        <button className='btn'>Vans</button> */}
        <Button onClickHandler={handleClick} value='' title='All Products' />
        <Button onClickHandler={handleClick} value='Nike' title='Nike'/>
        <Button onClickHandler={handleClick} value='Adidas' title='Adidas'/>
        <Button onClickHandler={handleClick} value='Puma' title='Puma'/>
        <Button onClickHandler={handleClick} value='Vans' title='Vans'/>

      </div>
    </div>
    </>
  )
}

export default Recommended