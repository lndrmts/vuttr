import React, { Component } from 'react';
import Modal from 'react-modal';
import { RemoveButton, GroupButtons } from './styles';

// Icons
import IconRemove from '../../icons/Icon-Close-Circle-2px.svg';
import IconClose from '../../icons/Close 2px.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
  },
};

class RemoveItem extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div>
        <RemoveButton onClick={this.openModal}>
          <img src={IconRemove} alt="Remove" className="IconSmall" />
          <span>Remove</span>
        </RemoveButton>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          overlayClassName="Overlay"
          contentLabel="Example Modal"
        >
          <h3>Remove tool</h3>
          <button
            type="button"
            className="closeButton"
            onClick={this.closeModal}
          >
            <img src={IconClose} alt="Close Modal" />
          </button>
          <p>Are you sure you want to remove xxx?</p>
          <GroupButtons>
            <button
              type="button"
              className="cancelButton"
              onClick={this.closeModal}
            >
              Cancelar
            </button>
            <button type="button" className="removeButton">
              Yes, remove
            </button>
          </GroupButtons>
        </Modal>
      </div>
    );
  }
}
export default RemoveItem;
