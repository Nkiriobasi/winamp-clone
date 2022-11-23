import React from 'react'
import '../../styles/home.scss'
import { Header, DiscoverCard, TribunesCard, FooterMenuTitle, FooterMenuItem } from '../../components'
import { Images } from '../../static'
import { Link } from 'react-router-dom'
import { CgFacebook } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'



const Home = () => {

  const playerText = `The revamped player tailored to blend music from 
                      different sources. Enjoy customized content from 
                      your favorite creators via Fanzone.`

  const creatorText = `The ultimate platform for creators for all their 
                      activities, from distribution and monetization to 
                      licensing and loyalty administration.`

  const smartWorldText = `Torniamo a parlare di Winamp, uno dei servizi 
                        che hanno fatto la storia della multimedialità 
                        per tantissimi utenti dall’inizio degli anni 2000, 
                        soprattutto su piattaforma PC.`

  const musicAllytext = `This week, the company opened that up with a signup 
                        process for 25,000 artists and audio creators.`

  const hypeBotText = `The Winamp revival continues with the addition of a 
                      new platform to help creators connect with the 83 
                      million fans that use the music listening platform.`

  const engadgetText = `The creator service makes it more than an MP3 player`

  const musicTechText = `The platform aims to put creators in control of their 
                        content`

  const musicAlly2Text = `Media player Winamp‘s original heyday may be some 
                          time in the past, but it remains a going concern – 
                          80 million people are using the software around the 
                          world still.
`

  return (
    <React.Fragment>
        <Header />
        
        <main className="main">
          <section className="videoFixed">
            <video width="1366" muted loop autoPlay>
              <source src={Images.GradientDarkMp4} type="video/mp4" />
            </video>
            <div className="videoFixedMedia" style={{ width: '1366px', heightt : '739px' }}></div>
          </section>
          
          <section className="hero">
            <div className="heroContainer">
              <span className='titleWrapper'>
                <h1 className="headlineTitle">Set the tone!</h1>
              </span>

              <span className='textWrapper'>
                <p className="headlineText">A universal platform connecting listeners with their favorite artists, 
                  podcasts and radio stations. Stay tuned, much more to come!
                </p>
              </span>
            </div>
          </section>
          
          <section className="discover">
            <div className="container">
              <DiscoverCard 
                title= 'Player'
                src= {Images.Player1}
                alt= 'player'
                text= {playerText}
                btnText= 'Discover the Player'
                cardLink= '/players'
              />

              <DiscoverCard 
                title= 'Creator'
                src= {Images.Creators}
                alt= 'creator'
                text= {creatorText}
                btnText= 'Discover the Creators'
                cardLink= './creators'
              />
            </div>
          </section>

          <section className="discoverFull">
            <div className="container">
              <div className="discoverItem">
                <div className="discoverMedia">
                  <figure className="discoverMediaPicture">
                    <img src={Images.Fanzone} alt="fanzone homepage" className="object__fit__cover" />
                  </figure>
                </div>

                <div className="discoverHeadline">
                  <h2 className="discoverTitle">Fanzone: a place where artists meets listeners</h2>
                  <div className="discoverText">
                    <p>
                      <strong>Fanzone for Listeners</strong>
                    </p>

                    <ul>
                      <li>Keep your favorite music, radio stations and podcasts in one place</li>
                      <li>Support your favorite artists in Winamp and get exclusive content</li>
                      <li>Interact directly with those who inspire you</li>
                    </ul>

                    <p>
                      <strong>
                        <br />
                        Fanzone for Creators
                      </strong>
                    </p>

                    <ul>
                      <li>Discover new ways to generate income from your music</li>
                      <li>Create more direct engagement with passionate fans</li>
                      <li>Take your power back and get supported directly by fans</li>
                    </ul>
                  </div>

                  <Link to='/fanzone' className='btn btnPrimaryLink'>
                    <span>Discover the Fanzone</span>
                  </Link>
                </div>

                <Link to='/fanzone' className='globalLink'></Link>
              </div>
            </div>
          </section>

          <section className="media">
            <div className="container">
              <div className="mediaContainer">
                <h2 className="mediaTitle">The History of Winamp</h2>
                <div className="mediaText">
                  <p>
                    Winamp is a legend with a heritage going all the 
                    way back to 1997, and still maintaining a vibrant 
                    community of millions of active users worldwide 
                    today.<br /> Check out the story of Winamp and what’s coming next!
                  </p>
                </div>

                <div className="mediaButtons">
                  <Link to='/about' className='btn btnPrimaryLink'>
                    <span>More about Winamp</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="scroller">
            <div className="scroller__inner">
              <h2 className="scroller__title">
                <span>What they say about us</span>
                <span>What they say about us</span>
              </h2>
            </div>
          </section>
          
          <section className="tribunes tribunes__scroller">
            <div className="container">
              <ol className="tribunes__items">
                <TribunesCard
                  src={Images.Download}
                  alt= 'smartWorld'
                  dateTime= 'September 13, 2022'
                  source= 'Smartworld'
                  title= 'Winamp sta tornando in una veste tutta nuova'
                  text={smartWorldText} 
                />

                <TribunesCard
                  src={Images.MusicAllyLogo}
                  alt= 'musicAlly'
                  dateTime= 'September 13, 2022'
                  source= 'MusicAlly'
                  title= 'Winamp opens up its new creator tools for 25,000 artists'
                  text={musicAllytext}
                />
              </ol>

              <ol className="tribunes__items">
                <TribunesCard
                  src={Images.Hypebot}
                  alt= 'hypebot'
                  dateTime= 'September 13, 2022'
                  source= 'Hypebot'
                  title= 'Signup NOW for a FREE year of the Winamp For Creators toolkit'
                  text={hypeBotText}
                />

                <TribunesCard
                  src={Images.Unnamed}
                  alt= 'engadget'
                  dateTime= 'September 13, 2022'
                  source= 'Engadget'
                  title= 'Winamp’s revival includes platforms for musicians and fans'
                  text={engadgetText} 
                />
              </ol>

              <ol className="tribunes__items">
                <TribunesCard
                  src={Images.MusictechOgLogo}
                  alt= 'music tech' 
                  dateTime= 'September 13, 2022'
                  source= 'MusicTech'
                  title= 'Winamp’s revival includes platforms for musicians and fans'
                  text={musicTechText}
                />

                <TribunesCard
                  src={Images.MusicAllyLogo}
                  alt= 'musicAlly' 
                  dateTime= 'July 21, 2022'
                  source= 'MusicAlly'
                  title= 'Winamp outlines its plans for aggregation, artists and NFTs'
                  text={musicAlly2Text}
                />
              </ol>

              <div className="tribunes__footer">
                <Link to='/about/tribune' className='btn btnPrimaryLink'>
                  <span>See more</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className='container'>
            <section className="footer__left">
              <div className="footer-logo">
                <Link to='/' className='globalLink'>
                  <span className="u-visually-hidden">Winamp</span>
                </Link>
                <img src={Images.footerLogo} alt="logo" className='object__fit__cover' />
              </div>
            </section>
            
            <section className="footer__center">
              <nav className="footer__nav">
                <div className="footer__nav-items">
                  <FooterMenuTitle text= 'The player' />

                  <ul className="menu">
                    <FooterMenuItem text= 'Overview' />
                    <FooterMenuItem text= 'Community' />
                    <FooterMenuItem text= 'Download' />
                    <FooterMenuItem text= 'Fanzone' />
                  </ul>
                </div>
                <div className="footer__nav-items">
                  <FooterMenuTitle text= 'Creators' />

                  <ul className="menu">
                    <FooterMenuItem text= 'Overview' />
                    <FooterMenuItem text= 'Services' />
                    <FooterMenuItem text= 'Pricing' />
                    <FooterMenuItem text= 'Fanzone' />
                  </ul>
                </div>
                <div className="footer__nav-items">
                  <FooterMenuTitle text= 'Company' />
                  
                  <ul className="menu">
                    <FooterMenuItem text= 'About Us' />
                    <FooterMenuItem text= 'Careers' />
                    <FooterMenuItem text= 'Foundation' />
                    <FooterMenuItem text= 'Help Center' />
                    <FooterMenuItem text= 'NFT Initiative' />
                    <FooterMenuItem text= 'For Partners' />
                    <FooterMenuItem text= 'Press Kit' />
                    <FooterMenuItem text= 'Tribune' />
                  </ul>
                </div>
              </nav>
            </section>
            
            <section className="footer__right">
              <h2 className="footer__title-big">Set the tone!</h2>

              <div className="footer__ctas">
                <Link to='/creators' className='btn btnPrimaryLink'>
                  <span>Creators</span>
                </Link>

                <Link to='/music-player' className='btn btnBorder'>
                  <span>Play</span>
                </Link>
              </div>

              <div className="footer__socials">
                <FooterMenuTitle text= 'Follow Us' />

                <ul className="social__items">
                  <li>
                    <a href="/#" className='social__item'>
                      <span className="social-icon">
                        <CgFacebook />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className='social__item'>
                      <span className="social-icon">
                        <AiOutlineInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className='social__item'>
                      <span className="social-icon">
                        <TiSocialLinkedin />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className='social__item'>
                      <span className="social-icon">
                        <AiOutlineTwitter />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="footer__bottom"></section>
          </div>
        </footer>
    </React.Fragment>
  )
}


export default Home