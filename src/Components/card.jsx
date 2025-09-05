import React from 'react'
import './card.css'


const Card = (props) => {
  return (
    <div className='card' >
      <img  className='imag' src={props.image} alt="Image not available" />
      <h2 className='title'>{props.product}</h2>
      <p className='txt'>{props.desc}</p>
      <button className='btn'>Order Now</button>
      <button className='btn'>Add to Cart</button>
    </div>
  )
}

export default Card
