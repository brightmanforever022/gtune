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
        <Col>
          <Nav.Link href="/">
            <Logo />
          </Nav.Link>
        </Col>
        <Col xs={8}><Search /></Col>
        <Col><HeaderIcons /></Col>
      </Row>
    </Container>
  )
}

export default Header;