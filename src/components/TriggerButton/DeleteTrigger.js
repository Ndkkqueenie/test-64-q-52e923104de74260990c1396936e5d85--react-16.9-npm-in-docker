import React from 'react';

const DeleteTrigger = ({ triggerDelete, buttonRef, showModal }) => {
  return (
    <button 
        style={{
            height: "30px",
            width: "60px",
            marginLeft: 5,
            marginBottom: 5,
            fontSize: 14, 
            borderRadius: 4, 
            backgroundColor: "#343a40", 
            color: "#ffffff"
        }} 
        className="delete_lead_modal_btn"  
        ref={buttonRef}
        onClick={showModal}
    >
        {triggerDelete}  
    </button>
  );
};

export default DeleteTrigger;