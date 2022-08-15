import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const Email = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={() => onClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal to add/edit Email</p>
      </Modal.Body>
    </Modal>
  )
}

Email.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Email;