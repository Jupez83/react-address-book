import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/AppConstants'

exports.AddContact = function(contact) {
  console.log("ACTION, AddContact", contact);

  AppDispatcher.dispatch({
    type: Constants.ADD_CONTACT,
    contact: contact
  });
};

exports.EditContact = function(contactId, contact) {
  console.log("ACTION, EditContact", contactId, contact);

  AppDispatcher.dispatch({
    type: Constants.EDIT_CONTACT,
    contactId: contactId,
    contact: contact
  });
};

exports.RemoveContact = function(contactId) {
  console.log("ACTION, RemoveContact", contactId);

  AppDispatcher.dispatch({
    type: Constants.REMOVE_CONTACT,
    contactId: contactId
  });
};
