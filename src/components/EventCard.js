import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Tag from '../components/Tag';

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  content: {
    backgroundColor: "#f6f7f8",
    padding: 0
  }
};

function EventCard(props) {
  const { title, image, date, time, description } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div onClick={openModal} className="event-card w-full md:w-2/5 xl:1/3 m-4 h-50 rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
      <EventModal 
        // key={index}
        title={event.title}
        image={event.image}
        description={event.description}
        date={eventDate}
        time={eventTime}
      />

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
};

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
