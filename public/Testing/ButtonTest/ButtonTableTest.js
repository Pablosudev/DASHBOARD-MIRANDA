import React from "react";

const ButtonTable = ({ status }) => {
    
    const getButtonColor = () => {
        switch (status) {
            case 'Available':
                return '#5AD07A'; 
            case 'Booked':
                return '#FF4D4D';
            default:
                return 'white';
        }
    };

    return (
        <button style={{ backgroundColor: getButtonColor() }}>
            {status}
        </button>
    );
};

export { ButtonTable };
