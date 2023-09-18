import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownMenu = () => {
    
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Dil seçimi
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Az</Dropdown.Item>
        <Dropdown.Item href="#/action-2">En</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ru</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default DropdownMenu