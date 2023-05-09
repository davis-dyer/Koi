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
        <h2 className="mt-10">{i.title}</h2>
      )}
    </div>
  );
}

export default EventList;