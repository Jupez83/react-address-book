import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop={true}>
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
