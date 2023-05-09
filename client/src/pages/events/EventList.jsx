import React, { useEffect, useState } from "react";
import { getAllEventList } from "../../modules/eventManager";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    getAllEventList().then(evt => setEvents(evt));
  };

  useEffect(() => {
    getEvents()
  }, []);

  return (
    <div>
      {events.map((i) => ( 
        <ul>
          <li className="mt-10" key={i.id}>{i.title}</li>
          <li className="mt-10" key={i.id}>{i.desc}</li>
        </ul>
      ))}
    </div>
  );
}

export default EventList;