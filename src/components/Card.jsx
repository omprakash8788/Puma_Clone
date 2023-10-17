import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
const Card = ({img, title, star, reviews, newPrice, prevPrice}) => {
  return (
    <div>
       <section className='card'>
        <img className='card-image' src={img} alt={title} />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className='card-review'>
            {/* <AiFillStar className='rating-star'/>
            <AiFillStar className='rating-star'/>
            <AiFillStar className='rating-star'/>
            <AiFillStar className='rating-star'/> */}
            {star} {star} {star} {star}
            <span className='total-reviews'>{reviews}</span>
          </section>
          <section className='card-price'>
            <div className="price">
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Card