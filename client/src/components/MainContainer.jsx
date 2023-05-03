import React from 'react'
//import HomeAboutContainer from './HomeAboutContainer'
//import Footer from './Footer'
import HomeContainer from './HomeContainer'
//import LastestPost from './LastestPost'
//import HomePodcastContainer from './HomePodcastContainer'

const MainContainer = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <section>
        <HomeContainer />
      </section>
{/*       <section>
        <HomeAboutContainer />
      </section>
      <section>
        <LastestPost />
      </section>
      <section>
        <HomePodcastContainer />
      </section> */}
    </div>
  )
}

export default MainContainer