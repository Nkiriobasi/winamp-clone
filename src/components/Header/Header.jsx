import React from 'react'
import { Link } from "react-router-dom";
import { Images } from '../../static'
import './header.scss'


const Header = () => {

  return (
        <header className='header'>
            <div className='headerContainer'>
                <div className='headerLogo'>
                    <Link to='/' className='logoLink'>
                        <img src={Images.WinampLogo} alt="winamp logo" className='logo' />
                    </Link>
                </div>

                <nav className='headerNav'>
                    <ul className='menu'>
                        <li className='menuItem menuItemHasChildren'>
                            <Link to='/player/' className='menuItemLink'>Player</Link>

                            <ul className='subMenu'>
                                <li className="subMenuItem">
                                    <Link to='/player/' className="subMenuItemLink">Overview</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/player/download' className="subMenuItemLink">Download</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/player/community' className="subMenuItemLink">Community</Link> 
                                </li>
                            </ul>
                        </li>


                        <li className='menuItem'>
                            <Link to='/fanzone/' className='menuItemLink'>Fanzone</Link>
                        </li>


                        <li className='menuItem menuItemHasChildren'>
                            <Link to='/creators/' className='menuItemLink'>Creators</Link>

                            <ul className='subMenu'>
                                <li className="subMenuItem">
                                    <Link to='/creators/' className="subMenuItemLink">Overview</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/creators/services' className="subMenuItemLink">Services</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/creators/pricing' className="subMenuItemLink">Pricing</Link>
                                </li>
                            </ul>
                        </li>

                        
                        <li className='menuItem menuItemHasChildren'>  
                            <Link to='/about/' className='menuItemLink'>More</Link>

                            <ul className='subMenu'>
                                <li className="subMenuItem">
                                    <Link to='/about/' className="subMenuItemLink">About Us</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/about/foundation' className="subMenuItemLink">Foundation</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/about/hc/en-us' className="subMenuItemLink">Help Center</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/about/partners' className="subMenuItemLink">For Partners</Link>
                                </li>
                                <li className="subMenuItem">
                                    <Link to='/about/tribune/' className="subMenuItemLink">Tribune</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <nav className="headerCtas">
                    <ul className='menu'>
                        <li className="menuItem">
                            <Link to='/pass' className='btn btnPrimaryLink'>Creator Pass</Link>
                        </li>
                        <li className="menuItem">
                            <Link to='/music-player' className='btn btnSecondaryLink'>Play</Link>
                        </li>
                    </ul>
                </nav>

                <button className='burger' type='button'>
                    <span className="u-visually-hidden">menu</span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                </button>
            </div>
        </header>
  )
}

export default Header