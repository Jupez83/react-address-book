import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            React Address Book
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to={'/'} activeClassName="active">
              <NavItem>Address book</NavItem>
            </IndexLinkContainer>
            <LinkContainer to={'/contacts'} activeClassName="active">
              <NavItem>Add contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}