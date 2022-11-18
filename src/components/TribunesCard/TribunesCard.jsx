import React from 'react'
import './TribunesCard.scss'
import { BsArrowUpRight } from 'react-icons/bs'


const TribunesCard = ({ src, alt, dateTime, source, title, text }) => {
  return (
    <li className='tribunes__item card'>
        <figure className="card__image">
            <img src={src} alt={alt} className='object__fit__cover' />
        </figure>

        <div className="card__content">
            <strong className="card__head">
                <time className='dates' datetime={dateTime}>{dateTime}</time>
                <span className="spacer"> - </span>
                <a href="/#" className="source">{source}</a>
            </strong>
            
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
        </div>

        <button className="btn" type='button'>
            <span>Read more</span>
            <span className="icon">
                <BsArrowUpRight />
            </span>
        </button>

        <a href='/#' className='globalLink'>
            <span className="u-visually-hidden">{}</span>
        </a>
    </li>
  )
}

export default TribunesCard