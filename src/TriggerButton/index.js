import React from 'react';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
        style={{ 
            height: "40px",
            width: "110px",
            fontSize: 18, 
            borderRadius: 6, 
            backgroundColor: "#343a40", 
            color: "#ffffff"
        }}
        className="add_lead_modal_btn"
        ref={buttonRef}
        onClick={showModal}
    >
      {triggerText}
    </button>
  );
};

export default Trigger;