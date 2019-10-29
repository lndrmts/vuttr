/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ButtonAddItem, FormContainer } from './styles';
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

function AddItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { handleSubmit } = props;
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <ButtonAddItem type="button" onClick={openModal}>
        Add
      </ButtonAddItem>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <h3>Add new tool</h3>
        <button type="button" className="closeButton" onClick={closeModal}>
          <img src={IconClose} alt="Close Modal" />
        </button>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <label>
              Tool name <br />
              <Input name="title" type="text" placeholder="Tool Name" />
            </label>
            <label>
              Tool Link <br />
              <Input name="link" type="text" placeholder="Tool link" />
            </label>
            <label>
              Tool Description <br />
              <Textarea
                name="description"
                type="text"
                placeholder="Tool Description"
              />
            </label>
            <label>
              Tags <br />
              <Input name="tags" type="text" placeholder="Tags" />
            </label>
            <br />
            <br />
            <button type="submit" value="Add Tool" className="button">
              Add Tool
            </button>
          </FormContainer>
        </Form>
      </Modal>
    </div>
  );
}

AddItem.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default AddItem;
