import React from 'react';

import EventCard from './EventCard';

function EventSection(props) {
    const { title } = props;
    return (
        <div className="mx-10 my-5">
            <div className="text-2xl mb-2">{title}</div>
            <div className="flex">
            </div>
        </div>
    )
}

export default EventSection;