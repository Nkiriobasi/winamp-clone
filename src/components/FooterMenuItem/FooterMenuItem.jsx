import React from 'react'
import './FooterMenuItem.scss'
import { Link } from 'react-router-dom'

const FooterMenuItem = ({ text }) => {
  return (
    <li className="menu__item">
        <Link to='/' className='menu__itemLink'>{text}</Link>
    </li>
  )
}

export default FooterMenuItem