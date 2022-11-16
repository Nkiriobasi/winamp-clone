import React from 'react'
import '../../styles/home.scss'
import { Header, DiscoverCard } from '../../components'
import { Images } from '../../static'



const Home = () => {

  const videoSizing = {
    width: '1366px',
    height: '739px'
  }

  const playerText = `The revamped player tailored to blend music from 
                      different sources. Enjoy customized content from 
                      your favorite creators via Fanzone.`

  const creatorText = `The ultimate platform for creators for all their 
                      activities, from distribution and monetization to 
                      licensing and loyalty administration.`


  return (
    <React.Fragment>
        <Header />
        
        <main className="main">
          <section className="videoFixed">
            <video width="1366" muted loop autoPlay>
              <source src={Images.GradientDarkMp4} type="video/mp4" />
            </video>
            <div className="videoFixedMedia" style={videoSizing}></div>
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
        </main>
    </React.Fragment>
  )
}


export default Home