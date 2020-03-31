import React from 'react';

function EventSection(props) {
    const { title } = props;
    return (
        <div className="mx-10 my-5">
            <h2 className="text-xl">{title}</h2>
        </div>
    )
}

export default EventSection;