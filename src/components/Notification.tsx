import React from 'react';

const Notification = () => {
    return (
        <div
            style={{
                backgroundColor: 'maroon',
                color: 'white',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',      // vertical center
                justifyContent: 'center',  // horizontal center
            }}
        >
            Free delivery for all orders over $50. Order your food now!
        </div>


    )
}

export default Notification