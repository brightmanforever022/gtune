import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const ShippingAndBillings = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={() => onClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Shipping and Billings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal to add/edit shipping and billings</p>
      </Modal.Body>
    </Modal>
  )
}

ShippingAndBillings.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ShippingAndBillings;