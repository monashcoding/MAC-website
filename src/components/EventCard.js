import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../components/Tag';

function EventCard(props) {
  const { title, image, date, time } = props;

  return (
    <div className="event-card w-full md:w-2/5 xl:1/3 m-4 h-50 rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
      <div className="image-container relative">
        {(date || time) && (
          <Tag
            text={`${date} ${time}`}
            className={'absolute float-right top-1 right-1'}
          />
        )}
        {image ? (
          <img
            className="w-full h-48 md:h-56 object-cover"
            src={image}
            alt={title}
          ></img>
        ) : (
          <div className="h-48 md:h-56"></div>
        )}
      </div>
      <div className="font-bold mx-2 pb-2">{title}</div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
};

EventCard.defaultProps = {
  title: 'No Title',
  image: '',
  date: '',
  time: '',
};

export default EventCard;
