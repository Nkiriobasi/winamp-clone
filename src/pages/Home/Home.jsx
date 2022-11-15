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
            <video width="1366" muted loop>
              <source src={Images.GradientDarkMp4} type="video/mp4" />
            </video>
            <div className="videoFixedMedia" style={videoSizing}></div>
          </section>
        </main>
    </React.Fragment>
  )
}


export default Home