import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';

import '../styles/styles.scss';
import EventSection from '../components/EventSection';

function IndexPage(props) {
    const { data } = props;
    const upcomingEvents = [];

    // TODO: Sort data into past and upcoming
    // Convert the graphql data into a cleaner format
    const graphqlEventsData = data.allMarkdownRemark.events;
    const pastEvents = graphqlEventsData.map((item) => {
        const { id, ...eventDetails } = item.node;
        return { id: item.node.id, ...eventDetails.post }
    })

    return (
        <div>
            <Header />

            <EventSection title="Upcoming" events={upcomingEvents} />

            <EventSection title="Past" events={pastEvents} />
        </div>
    );
}

export default IndexPage;

export const eventsQuery = graphql`
  query {
    allMarkdownRemark {
        events: edges {
            node {
            id
            post: frontmatter {
                description
                eventDate
                image
                title
            }
            }
        }
    }
  }
`;
