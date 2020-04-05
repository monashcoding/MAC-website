import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import EventCard from './EventCard';

function EventSection(props) {
  const { title, events } = props;

  const renderEvents = eventList => {
    return eventList.map((event, index) => {
      const eventDate = moment(event.eventDate).format('DD/MM/YYYY');
      const eventTime = moment(event.eventDate).format('hh:mm A');
      return (
        <EventCard
          key={index}
          title={event.title}
          image={event.image}
          date={eventDate}
          time={eventTime}
        />
      );
    });
  };

  return (
    <div className="mx-10 my-5">
      <div className="text-2xl mb-2">{title}</div>
      <div className="flex flex-wrap justify-around">
        {!!events.length ? renderEvents(events) : <p>No Events</p>}
      </div>
    </div>
  );
}

EventSection.propTypes = {
  title: PropTypes.string,
  events: PropTypes.array,
};

EventSection.defaultProps = {
  title: '',
  events: [],
};

export default EventSection;
