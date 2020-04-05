import { graphql, useStaticQuery } from 'gatsby';

const useEventPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___eventDate], order: DESC }
      ) {
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
  `);

  // Convert the graphql data into a cleaner format
  const graphqlEventsData = allMarkdownRemark.events;
  const events = graphqlEventsData.map(item => {
    const { id, ...eventDetails } = item.node;
    return { id: item.node.id, ...eventDetails.post };
  });

  return events;
};

export default useEventPosts;
