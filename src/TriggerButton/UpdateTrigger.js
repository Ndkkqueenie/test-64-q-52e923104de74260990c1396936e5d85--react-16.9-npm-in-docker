import React from 'react';

const UpdateTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button 
        style={{
            height: "30px",
            marginLeft: 5,
            marginBottom: 5,
            fontSize: 14, 
            borderRadius: 4, 
            backgroundColor: "#343a40", 
            color: "#ffffff"
        }} 
        className="update_lead_modal_btn"  
        ref={buttonRef}
        onClick={showModal}
    >
        {triggerText}  
    </button>
  );
};

export default UpdateTrigger;