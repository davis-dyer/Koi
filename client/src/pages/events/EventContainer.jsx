import React, { useState } from 'react'
import EventCard from './EventCard'
import EventList from './EventList'
import CreateEvent from './CreateEvent'


const EventContainer = () => {

  /* const [searchTerms, setSearchTerms] = useState("") */

  return (
    <>
      <div className='w-full h-auto flex flex-col'>
        <section className="">
            <EventCard />
        </section>
        <section className="">
            <EventList />
        </section>
        <section className="">
            <CreateEvent />
        </section>
      </div>
    </>
  )
}

export default EventContainer