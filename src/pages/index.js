import React from 'react';
import moment from 'moment';

import useEventPosts from '../hooks/useEventPosts';

import Header from '../components/Header';
import EventSection from '../components/EventSection';

import '../styles/styles.scss';

function IndexPage() {
  const events = useEventPosts();

  // Filter out events by todays date
  const eventIndex = events.findIndex(item => {
    return moment(item.eventDate).isBefore();
  });
  const upcomingEvents = eventIndex >= 0 ? events.slice(0, eventIndex) : [];
  const pastEvents = eventIndex >= 0 ? events.slice(eventIndex) : [];

  return (
    <div>
      <Header />
      <EventSection title="Upcoming" events={upcomingEvents} />

      <EventSection title="Past" events={pastEvents} />
    </div>
  );
}

export default IndexPage;
