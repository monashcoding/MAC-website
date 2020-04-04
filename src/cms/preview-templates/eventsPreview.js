import React from "react";

import EventCard from '../../components/EventCard';

function EventsPreview(props) {
    const { entry } = props;
    return (
        <div className="flex flex-wrap justify-center">
            <EventCard title={entry.getIn(['data', 'title'])} />
        </div>
    )
}

export default EventsPreview;