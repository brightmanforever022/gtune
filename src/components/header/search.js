import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='header-search'>
      <InputGroup>
        <InputGroup.Text>{<BsSearch />}</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder=""
        />
      </InputGroup>
      <p>Your health deserves this one</p>
    </div>
  )
}

export default Search;