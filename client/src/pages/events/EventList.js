import React, { useEffect, useState } from "react";
import { getAllEvents } from "../../modules/eventManager";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    getAllEvents().then(events => setEvents(events));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      {events.map(i => 
        <div>{i.Title}</div>
      )}
    </div>
  );
}

export default EventList;