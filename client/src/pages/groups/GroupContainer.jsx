import React, { useState } from 'react'
import GroupIntro from './GroupIntro'
import GroupInfo from './GroupInfo'
import GroupEventList from './GroupEventList'
import CreateGroup from './CreateGroup'

const Communities = () => {

  return (
    <>
      <section>
        <GroupIntro />
      </section>
      <section>
        <GroupEventList />
      </section>
      <section>
        <GroupInfo />
      </section>
      <section>
        <CreateGroup />
      </section>
    </>
  )
}

export default Communities