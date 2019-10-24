/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Modal from 'react-modal';
import { FormModal, ButtonAddItem } from './styles';
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

class AddItem extends Component {
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
        <ButtonAddItem type="button" onClick={this.openModal}>
          Add
        </ButtonAddItem>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          overlayClassName="Overlay"
          contentLabel="Example Modal"
        >
          <h3>Add new tool</h3>
          <button
            type="button"
            className="closeButton"
            onClick={this.closeModal}
          >
            <img src={IconClose} alt="Close Modal" />
          </button>
          <FormModal>
            <label>
              Tool name <br />
              <input type="text" placeholder="Tool Name" />
            </label>
            <label>
              Tool Link <br />
              <input type="text" placeholder="Tool link" />
            </label>
            <label>
              Tool Description <br />
              <textarea type="text" placeholder="Tool Description" />
            </label>
            <label>
              Tags <br />
              <input type="text" placeholder="Tags" />
            </label>
            <br />
            <br />
            <input type="submit" value="Add Tool" className="button" />
          </FormModal>
        </Modal>
      </div>
    );
  }
}

export default AddItem;
