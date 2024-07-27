import React from 'react';
import {Button, Container, Navbar, Modal} from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="sm">
        <Navbar.brand href="/">Ecommerce Application</Navbar.brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button>Cart 0 Item</Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent