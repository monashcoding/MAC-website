import React from 'react';
import moment from 'moment';

import EventCard from '../../components/EventCard';

function EventsPreview(props) {
  const { entry } = props;
  const title = entry.getIn(['data', 'title']);
  const image = entry.getIn(['data', 'image']);
  const eventDateTime = entry.getIn(['data', 'eventDate']);
  const eventDate = moment(eventDateTime).format('DD/MM/YYYY');
  const eventTime = moment(eventDateTime).format('hh:mm A');
  return (
    <div className="flex flex-wrap justify-center">
      <EventCard
        title={title}
        image={image}
        date={eventDate}
        time={eventTime}
      />
    </div>
  );
}

export default EventsPreview;
