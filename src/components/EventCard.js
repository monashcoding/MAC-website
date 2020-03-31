import React from 'react';

function EventCard(props) {
    const { title } = props;
    return (
        <div className="event-card w-full sm:w-1/2 md:w-1/3 m-5 rounded overflow-hidden shadow-lg">
            <div className="h-40 image-container">
            </div>
            <div className="font-bold mx-2 pb-2">{title}</div>
        </div>
    )
}

export default EventCard;