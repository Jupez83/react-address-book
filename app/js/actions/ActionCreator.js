import AppDispatcher from '../dispatcher/AppDispatcher'

exports.AddContact = function(contact) {
  console.log("ACTION, AddContact", contact);

  var action = {
    type: 'add_contact',
    contact: contact
  };

  AppDispatcher.dispatch(action);
};

exports.EditContact = function(contactId, contact) {
  console.log("ACTION, EditContact", contactId, contact);

  var action = {
    type: 'edit_contact',
    contactId: contactId,
    contact: contact
  };

  AppDispatcher.dispatch(action);
};

exports.RemoveContact = function(contactId) {
  console.log("ACTION, RemoveContact", contactId);

  var action = {
    type: 'remove_contact',
    contactId: contactId
  };

  AppDispatcher.dispatch(action);
};
