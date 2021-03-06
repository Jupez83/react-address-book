const ACTION_ADD_CONTACT = 0;
const ACTION_EDIT_CONTACT = 1;
const ACTION_REMOVE_CONTACT = 2;

const CONTACT_NAME = 'Name';
const CONTACT_ADDRESS = 'Address';
const CONTACT_CITY = 'City';
const CONTACT_EMAIL = 'Email';
const CONTACT_FIELDS = [CONTACT_NAME, CONTACT_ADDRESS, CONTACT_CITY, CONTACT_EMAIL];

const CHANGE_EVENT = 'change';

const BUTTON_ADD  = 'Add Contact';
const BUTTON_EDIT  = 'Edit Contact';

const Constants = Object.freeze({
  ACTION_ADD_CONTACT,
  ACTION_EDIT_CONTACT,
  ACTION_REMOVE_CONTACT,
  CHANGE_EVENT,
  CONTACT_FIELDS,
  CONTACT_NAME,
  CONTACT_ADDRESS,
  CONTACT_CITY,
  CONTACT_EMAIL,
  BUTTON_ADD,
  BUTTON_EDIT,
});

export default Constants;
