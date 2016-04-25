import React from 'react'
import { browserHistory } from 'react-router'

import { AddContact, RemoveContact } from '../actions/ActionCreator'
import Constants from '../constants/AppConstants'
import ContactStore from '../stores/ContactStore'
import Table from '../components/Table'

export default class AddressBook extends React.Component {

  constructor() {
    super();
    this.state = {contacts: ContactStore.getAllContacts()};
    this.contactChanged = this.contactChanged.bind(this);
  }

  componentDidMount() {
    ContactStore.addChangeListener(this.contactChanged);
  }

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.contactChanged);
  }

  contactChanged() {
    this.setState({contacts: ContactStore.getAllContacts()});
  }

  editHandler(id) {
    let redirect = {
      pathname: '/contacts',
      query: {id},
    }
    browserHistory.push(redirect);
  }

  removeHandler(id) {
    console.log("REMOVE", id);
    RemoveContact(id);
  }

  render() {
    return (
      <div>
        <h1>Address Book</h1><hr/>
        <Table headData={Constants.CONTACT_HEADER}
               bodyData={this.state.contacts.data}
               editHandler={this.editHandler.bind(this)}
               removeHandler={this.removeHandler.bind(this)}
        />
      </div>
    );
  }
}
