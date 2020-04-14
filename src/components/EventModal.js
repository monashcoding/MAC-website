import React from 'react';
import PropTypes from 'prop-types';

function EventModal(props) {
  const {title,image,description,date,time} = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
      contentLabel="Example Modal"
    >
    <div>
        <div className="relative max-w-full bg-white px-32 py-8 border-b">
        <div className="max-w-screen-m">
            {(date || time) && (
            <Tag
                text={`${date}`}
            />
            )}
            <div className="relative">
            <div className="text-3xl text-gray-900 font-bold mt-4 mx-2 pb-2">{title}</div>
            <button
                className="px-5 py-2 border-solid border-gray-500 rounded-lg border absolute top-0 right-1 cursor-pointer"
            >
                <span className="text-gray-700 font-semibold">Share</span>
            </button>
            </div>
        </div>

        </div>

        <div className="relative max-w-full px-32 mx-auto mt-8">
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
            {/* <div className="mt-4 mx-2 w-7/12 whitespace-pre-wrap"><pre className="text-gray-900 font-sans w-7/12">{description}</pre></div> */}
            <div className="mt-4 mx-2 w-7/12 whitespace-pre-wrap">{description}</div>
            </>
        ) : (
            <div className="text-l text-gray-900 mx-2">No description yet!</div>
        )}
        </div>
    </div>
    </Modal>
  )
};

export default EventModal;