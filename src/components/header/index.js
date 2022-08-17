import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './logo';
import Search from './search';
import HeaderIcons from './headerIcons';
import '../../styles/header.scss';

function Header() {
  return (
    <Container className='app-header' fluid>
      <Row>
        <Col lg={3} xs={12}>
          <Nav.Link href="/">
            <Logo />
          </Nav.Link>
        </Col>
        <Col lg={7} xs={12}><Search /></Col>
        <Col lg={2} xs={12}><HeaderIcons /></Col>
      </Row>
    </Container>
  )
}

export default Header;