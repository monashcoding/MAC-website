import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Tag from '../components/Tag';

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  content: {
    backgroundColor: "#f6f7f8",
    padding: 0
  //   position: "relative",
  //   top: "auto",
  //   left: "auto",
  //   right: "auto",
  //   bottom: "auto",
  //   maxWidth: "1620px",
  //   margin: "32px auto",
  //   padding: 10,
  //   border: 0
  }
};

function EventCard(props) {
  const { title, image, date, time, description } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div onClick={openModal} className="event-card w-full md:w-2/5 xl:1/3 m-4 h-50 rounded overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
      {/* TODO: extract modal into its own component  */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={modalStyles}
        contentLabel="Example Modal"
      >
      <div>
        <div className="relative max-w-full bg-white px-48 py-8 border-b">
          <div className="max-w-screen-m">
            {(date || time) && (
              <Tag
                text={`${date}`}
              />
            )}
            <div className="text-3xl text-gray-900 font-bold mt-4 mx-2 pb-2">{title}</div>
            <btn
              className="px-5 py-2 border-solid border-gray-500 rounded-lg border absolute top-0 right-1"
            >
              <span className="text-gray-700 font-semibold">Share</span>
            </btn>
          </div>

        </div>

        <div className="relative max-w-full px-48 mx-auto mt-8">
          {image ? (
            <img
              className="w-7/12 h-full md:h-56 mt-8 mx-2 object-cover"
              src={image}
              alt={title}
            ></img>
          ) : (
            <div></div>
          )}
          {description ? (
            <>
            <div className="text-xl text-gray-900 font-bold mx-2 mb-2 mt-8">Details</div>
            <div className="mt-4 mx-2 w-7/12 text-gray-900">{description}</div>
            </>
          ) : (
            <div className="text-l text-gray-900 mx-2">No description yet!</div>
          )}
        </div>
        


      </div>
      </Modal>
    
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
