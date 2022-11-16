import React from 'react'
import './DiscoverCard.scss'
import { Link } from 'react-router-dom'


const DiscoverCard = ({ title, src, alt, text, btnText, cardLink }) => {
  return (
    <div className='discover__item'>
      <div className='discover__media'>
        <figure className="discover__media__picture">
          <img src={src} alt={alt} className='object__fit__cover' />
        </figure>

        <h2 className="discover__title">{title}</h2>
      </div>

      <div className='discover__headline'>
        <div className="discover__text">
          <p>{text}</p>
        </div>
        <Link to='' className='btn btnPrimaryLink'>
          <span>{btnText}</span>
        </Link>
      </div>

      <Link to={cardLink} className='globalLink'></Link>
    </div>
  )
}

export default DiscoverCard