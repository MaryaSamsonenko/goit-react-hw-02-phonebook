import PropTypes from "prop-types";
import { ContactItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";

export const ContactList = ({
  contacts,
  filter,
  filtredContacts,
  onDelete,
}) => {
  return (
    <List>
      {filter
        ? filtredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            />
          ))
        : contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            />
          ))}
    </List>
  );
};
ContactList.propType = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  filtredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
