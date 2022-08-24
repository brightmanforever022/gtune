import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import ShippingAndBillings from './shipping';
import Payment from './payment';
import Password from './password';
import Email from './email';
import { settingsList } from '../../constants';
import '../../styles/settings.scss';

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('shipping');
  
  function handleModal (type) {
    setModalType(type);
    setShowModal(true);
  }

  function closeModal () {
    setShowModal(false);
  }

  function deleteAccount() {
    setModalType('delete-account');
    setShowModal(true);
  }

  return (
    <Container className='settings-container' fluid>
      <h2>My Account</h2>
      {
        settingsList.map(settingItem => 
          <Row>
            <Col lg={2} md={3} xs={4} className='label'>{settingItem.label}</Col>
            <Col lg={4} md={6} xs={8}>
              <div
                className='edit-setting'
                onClick={() => handleModal(settingItem.key)}
              >
                {settingItem.title}
              </div>
            </Col>
          </Row>
        )
      }
      <a href="#" onClick={deleteAccount}>Delete Account</a>

      <Modal
        show={modalType === 'delete-account' && showModal}
        onHide={() => closeModal()}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>you are gonna delete account</p>
        </Modal.Body>
      </Modal>

      {modalType === 'shipping' && <ShippingAndBillings show={showModal} onClose={closeModal} />}
      {modalType === 'payment' && <Payment show={showModal} onClose={closeModal} />}
      {modalType === 'email' && <Email show={showModal} onClose={closeModal} />}
      {modalType === 'password' && <Password show={showModal} onClose={closeModal} />}
    </Container>
  )
}

export default Settings;