import React from 'react';
import ReactDOM from 'react-dom';
import { UpdateForm } from '../Form/indexUpdate';
import FocusTrap from 'focus-trap-react';

export const UpdateModal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  onSubmit
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        name="communication"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
            <div className="modal-header" style={{backgroundColor: "#343a40", color: "#ffffff"}}>
                <h5 className="modal-title">Mark Communication</h5>
                <button style={{border: 0, color: "#ffffff"}}
                    type="button" 
                    className="close" 
                    data-dismiss="modal" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>  
            <div className="modal-body" name="communication">
                <UpdateForm onSubmit={onSubmit} name="communication"/>
            </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default UpdateModal;