import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const Payment = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={() => onClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Payment Methods
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal to add/edit Payment</p>
      </Modal.Body>
    </Modal>
  )
}

Payment.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Payment;