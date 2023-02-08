import React from 'react'

const EventToolTip = (props) => {
    return (
        <div>
            {props?.title}-{props?.event.description}
        </div>
    )
}

export default EventToolTip
