import React, { Component } from 'react';
import { UpdateModal } from '../Modal/indexUpdate';
import UpdateTrigger from '../TriggerButton/UpdateTrigger';

export class UpdateContainer extends Component {

  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.UpdateTrigger.focus();
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
        <UpdateTrigger
          showModal={this.showModal}
          buttonRef={(n) => (this.UpdateTrigger = n)}
          triggerText={this.props.triggerText}
        />
        {this.state.isShown ? (
          <UpdateModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default UpdateContainer;