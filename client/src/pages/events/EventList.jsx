import React, { useEffect, useState } from "react";
import { getAllEventList, getAllEvents } from "../../modules/eventManager";
import Event from "./Event";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    getAllEvents().then(evt => setEvents(evt));
  };

  useEffect(() => {
    getEvents()
  }, []);


  return (
    <div>
        <Event data={events} />
    </div>
  );
}

export default EventList;