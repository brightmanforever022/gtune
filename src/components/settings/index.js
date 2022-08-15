import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ShippingAndBillings from './shipping';
import Payment from './payment';
import Password from './password';
import Email from './email';
import '../../styles/settings.scss';

const Settings = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('shipping');
  function handleModal (type) {
    setModalType(type);
    setShow(true);
  }
  function closeModal () {
    setShow(false);
  }

  return (
    <Container className='settings-container' fluid>
      <h2>My Account</h2>
      <Row>
        <Col lg={2} md={3} xs={4} className='label'>Add</Col>
        <Col lg={4} md={6} xs={8}>
          <div
            className='edit-setting'
            onClick={() => handleModal('shipping')}
          >
            Shipping and Billings:
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={3} xs={4} className='label'>Add</Col>
        <Col lg={4} md={6} xs={8}>
          <div
            className='edit-setting'
            onClick={() => handleModal('payment')}
          >
            Payment Methods:
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={3} xs={4} className='label'>Edit</Col>
        <Col lg={4} md={6} xs={8}>
          <div
            className='edit-setting'
            onClick={() => handleModal('email')}
          >
            Email: Dac**fd@gmail.com
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={3} xs={4} className='label'>Edit</Col>
        <Col lg={4} md={6} xs={8}>
          <div
            className='edit-setting'
            onClick={() => handleModal('password')}
          >
            Password: ********
          </div>
        </Col>
      </Row>

      {modalType === 'shipping' && <ShippingAndBillings show={show} onClose={closeModal} />}
      {modalType === 'payment' && <Payment show={show} onClose={closeModal} />}
      {modalType === 'email' && <Email show={show} onClose={closeModal} />}
      {modalType === 'password' && <Password show={show} onClose={closeModal} />}
    </Container>
  )
}

export default Settings;