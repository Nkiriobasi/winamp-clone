import React from 'react'
import '../../styles/musicPlayer.scss'
import { Images } from '../../static'
import { Link } from 'react-router-dom'
import { TbHome, TbHeadphones } from 'react-icons/tb'
import { MdOutlineAlbum, MdMusicNote, MdQueueMusic } from 'react-icons/md'
import { AiOutlineCloudDownload, AiOutlineSearch } from 'react-icons/ai'
import { HiPlusCircle } from 'react-icons/hi'


const MusicPlayer = () => {
  return (
    <React.Fragment>
      <aside>
        <div className="wrapper">
          <div className="logo__wrapper">
            <img src={Images.WinampRedLogo} alt="logo" />
            <h4>winamp</h4>
          </div>

          <div className="menu">
            <h4 className="menu__title">MENU</h4>

            <ul>
              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><TbHome /></span>
                  <span className="item">Home</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/albums' className="menu__item-link">
                  <span className="icon"><MdOutlineAlbum /></span>
                  <span className="item">Albums</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/artists' className="menu__item-link">
                  <span className="icon"><TbHeadphones /></span>
                  <span className="item">Artists</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/downloaded' className="menu__item-link">
                  <span className="icon"><AiOutlineCloudDownload /></span>
                  <span className="item">Downloaded</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/trending' className="menu__item-link">
                  <span className="icon"><MdMusicNote /></span>
                  <span className="item">Trending</span>
                </Link>
              </li>
            </ul>
          </div>

          
          <div className='menu'>
            <div className="menu-wrapper">
              <h4 className="menu__title">WINAMP PLAYLIST</h4>
              <span className=""><HiPlusCircle className="playlist__icon" /></span>
            </div>
            
            <ul>
              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className='home__player'>

        <div className="input__container">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className='search__icon' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MusicPlayer