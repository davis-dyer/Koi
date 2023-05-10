import React from 'react'
import HomeAboutContainer from './HomeAboutContainer'
import HomeContainer from './HomeContainer'

const MainContainer = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <section>
        <HomeContainer />
      </section>   
      <section>
        <HomeAboutContainer />
      </section>
    </div>
  )
}

export default MainContainer