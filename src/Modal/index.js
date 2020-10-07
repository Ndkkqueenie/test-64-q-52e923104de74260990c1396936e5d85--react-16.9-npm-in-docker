import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../Form';
import FocusTrap from 'focus-trap-react';

export const Modal = ({
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
                    <h5 className="modal-title">Add Lead</h5>
                    <button style={{border: 0, color: "#ffffff"}}
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
          <div className="modal-body">
            <Form onSubmit={onSubmit} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
