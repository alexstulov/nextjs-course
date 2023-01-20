import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return <EventList items={props.events} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  };
}

export default HomePage;
