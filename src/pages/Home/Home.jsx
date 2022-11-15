import React from 'react'
import '../../styles/home.scss'
import Header from '../../components/Header'
import { Images } from '../../static'



const Home = () => {

  const videoSizing = {
    width: '1366px',
    height: '739px'
  }

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
            <div className="heroContainer container">
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
          
          <section className="discover"></section>
        </main>
    </React.Fragment>
  )
}


export default Home