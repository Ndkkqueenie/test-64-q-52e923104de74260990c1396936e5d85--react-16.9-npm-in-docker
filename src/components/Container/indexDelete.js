import React, { Component } from 'react';
import { DeleteModal } from '../Modal/indexDelete';
import DeleteTrigger from '../TriggerButton/DeleteTrigger';

export class DeleteContainer extends Component {

  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.DeleteTrigger.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <DeleteTrigger
          showModal={this.showModal}
          buttonRef={(n) => (this.DeleteTrigger = n)}
          triggerDelete={this.props.triggerDelete}
        />
        {this.state.isShown ? (
          <DeleteModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default DeleteContainer;