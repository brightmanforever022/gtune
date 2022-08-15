import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const Password = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={() => onClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal to add/edit password</p>
      </Modal.Body>
    </Modal>
  )
}

Password.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Password;