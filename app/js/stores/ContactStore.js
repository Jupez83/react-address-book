import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/AppConstants'

class ContactStore extends EventEmitter {

  constructor() {
    super();
    this.contacts = {};
    this.contacts.header = Constants.CONTACT_FIELDS;
    this.contacts.data = [];
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }

  getAllContacts() {
    return this.contacts;
  }

  getContactByIndex(index) {
    return this.contacts.data[index];
  }
}

const contactStore = new ContactStore();

contactStore.dispatchToken = AppDispatcher.register(function(action) {
  let row = [];

  switch (action.type) {

    case Constants.ACTION_ADD_CONTACT:
      for (let key in action.contact) {
        let i = contactStore.contacts.header.indexOf(key);
        if (i >= 0) {
          row[i] = action.contact[key];
        }
      }
      contactStore.contacts.data.push(row);
      break;

    case Constants.ACTION_EDIT_CONTACT:
      for (let key in action.contact) {
        let i = contactStore.contacts.header.indexOf(key);
        if (i >= 0) {
          row[i] = action.contact[key];
        }
      }
      contactStore.contacts.data[action.contactId] = row;
      break;

    case Constants.ACTION_REMOVE_CONTACT:
      contactStore.contacts.data.splice(action.contactId, 1);
      break;

    default:
      return;
  }

  contactStore.emitChange();
});

module.exports = contactStore;
