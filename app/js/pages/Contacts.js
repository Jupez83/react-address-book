import React from 'react'
import { findDOMNode } from 'react-dom'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

import { AddContact, EditContact } from '../actions/ActionCreator'
import Constants from '../constants/AppConstants'
import ContactStore from '../stores/ContactStore'

export default class Contacts extends React.Component {

  constructor() {
    super();
    this.contactId = null;
  }

  componentWillMount() {
    let { query } = this.props.location;
    let contact = null;
    let object = {};

    if (query.id) {
      contact = ContactStore.getContactByIndex(query.id);
      if (contact) {
        this.contactId = query.id;
      }
    }

    Constants.CONTACT_FIELDS.forEach(function(name, index) {
      if (this.contactId) {
        object[name] = contact[index];
      } else {
        object[name] = '';
      }
    }, this);

    this.state = object;
  }

  handleSubmit(e) {
    e.preventDefault();

    let contact = {};
    Constants.CONTACT_FIELDS.forEach(function(name) {
      contact[name] = this.state[name];
    }, this);

    if (this.contactId) {
      EditContact(this.contactId, contact);
    } else {
      AddContact(contact);
    }

    browserHistory.push('/');
  }

  setValue(field, e) {
    let object = {};
    object[field] = e.target.value;
    this.setState(object);
  }

  getButtonString() {
    return this.contactId ? Constants.BUTTON_EDIT : Constants.BUTTON_ADD;
  }

  render() {
    return (
      <form className="form_style" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Contact</h2><br/>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Name</ControlLabel>
            <FormControl value={this.state[Constants.CONTACT_NAME]}
                         type="text"
                         placeholder="Enter name"
                         onChange={this.setValue.bind(this, Constants.CONTACT_NAME)}
            />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Address</ControlLabel>
            <FormControl value={this.state[Constants.CONTACT_ADDRESS]}
                         type="text"
                         placeholder="Enter address"
                         onChange={this.setValue.bind(this, Constants.CONTACT_ADDRESS)}
            />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>City</ControlLabel>
            <FormControl value={this.state[Constants.CONTACT_CITY]}
                         type="text"
                         placeholder="Enter city"
                         onChange={this.setValue.bind(this, Constants.CONTACT_CITY)}
            />
          </FormGroup>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Email</ControlLabel>
            <FormControl value={this.state[Constants.CONTACT_EMAIL]}
                         type="text"
                         placeholder="Enter name"
                         onChange={this.setValue.bind(this, Constants.CONTACT_EMAIL)}
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">
            {this.getButtonString()}
          </Button>
      </form>
    );
  }
}
