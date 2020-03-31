import React from 'react';

import EventCard from './EventCard';

function EventSection(props) {
    const { title, events } = props;

    const renderEvents = (eventList) => {
        return eventList.map((event) => {
            return <EventCard title={event.title} />
        })
    }

    return (
        <div className="mx-10 my-5">
            <div className="text-2xl mb-2">{title}</div>
            <div className="flex flex-wrap justify-center">
                {!!events.length ? renderEvents(events) : <p>No Events</p>}
            </div>
        </div>
    )
}

export default EventSection;