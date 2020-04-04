import React from 'react';
import PropTypes from 'prop-types';

function EventCard(props) {
    const { title, image } = props;

    return (
        <div className="event-card w-full md:w-2/5 xl:1/3 m-4 h-50 rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
            <div className="image-container">
                {image ? <img className="w-full h-48 md:h-56 object-cover" src={image} ></img> : <div className="h-48 md:h-56"></div>}
            </div>
            <div className="font-bold mx-2 pb-2">{title}</div>
        </div>
    )
}

EventCard.propTypes = {
    title: PropTypes.string
}

EventCard.defaultProps = {
    title: "No Title"
}

export default EventCard;