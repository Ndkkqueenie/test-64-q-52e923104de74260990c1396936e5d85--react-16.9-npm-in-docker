import React from 'react';
import ReactDOM from 'react-dom';
import { DeleteForm } from '../Form/indexDelete';
import FocusTrap from 'focus-trap-react';

export const DeleteModal = ({
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
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
            <div className="modal-header" style={{backgroundColor: "#343a40", color: "#ffffff"}}>
                <h5 className="modal-title">Do you wish to delete this lead?</h5>
                <button style={{border: 0, color: "#ffffff"}}
                    type="button" 
                    className="close" 
                    data-dismiss="modal" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>  
            <div className="modal-body">
                <DeleteForm onSubmit={onSubmit} />
            </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default DeleteModal;