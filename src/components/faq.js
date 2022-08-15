import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { BsSearch } from 'react-icons/bs';

import { faqData } from '../constants';
import '../styles/faq.scss';

const Faq = () => {
  const [query, setQuery] = useState('');
  const [faqList, setFaqList] = useState(faqData);

  useEffect(() => {
    const filteredFaqList = faqData.filter(faq => faq.title.toLowerCase().includes(query.toLowerCase()));
    setFaqList(filteredFaqList);
  }, [query]);

  function handleQueryChange(evt) {
    const searchText = evt.target.value;
    setQuery(searchText);
  }

  const accItems = faqList.map((faq, index) => 
    <Accordion.Item eventKey={index} key={index}>
      <Accordion.Header className='faq-title'>{faq.title}</Accordion.Header>
      <Accordion.Body className='faq-content'>
        {faq.content}
      </Accordion.Body>
    </Accordion.Item>
  );

  return (
    <Container className='faq-container' fluid>
      <Row>
        <Col xl={3} sm={12}>
          <h3>Help</h3>
          <div className='contact-info'>
            <p>you can contact us at: GreenTune@business.com</p>
            <p>you can call us at: 123-123-1234</p>
          </div>
        </Col>
        <Col xl={6} sm={12}>
          <h3>FAQ</h3>
          <InputGroup>
            <InputGroup.Text>Search FAQ &nbsp;&nbsp;{<BsSearch />}</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder=""
              value={query}
              onChange={handleQueryChange}
            />
          </InputGroup>
          <Accordion className='faq-list' defaultActiveKey="0">
            {accItems}
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Faq;