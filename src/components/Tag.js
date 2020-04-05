import React from 'react';
import PropTypes from 'prop-types';

function Tag(props) {
    const { text, className } = props;
    return (<span className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ${className}`}>{text}</span>)
}

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}

Tag.defaultProps = {
    className: '',
}

export default Tag;
