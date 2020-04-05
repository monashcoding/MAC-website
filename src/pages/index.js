import React from 'react';

import useEventPosts from '../hooks/useEventPosts';

import Header from '../components/Header';
import EventSection from '../components/EventSection';

import '../styles/styles.scss';

function IndexPage() {
  const upcomingEvents = [];

  // TODO: Sort data into past and upcoming
  const pastEvents = useEventPosts();

  return (
    <div>
      <Header />

      <EventSection title="Upcoming" events={upcomingEvents} />

      <EventSection title="Past" events={pastEvents} />
    </div>
  );
}

export default IndexPage;
