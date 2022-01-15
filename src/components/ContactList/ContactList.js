import PropTypes from "prop-types";
import { Button, List, Item, Description } from "./ContactList.styled";

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <List className="contactList">
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <Item key={id} name={name}>
                <Description>{name}:</Description>{" "}
                <Description>{number}</Description>
                <Button type="button">Delete</Button>
              </Item>
            ))
        : contacts.map(({ id, name, number }) => (
            <Item key={id} name={name}>
              <Description>{name}:</Description>{" "}
              <Description>{number}</Description>
              <Button type="button" onClick={() => onDelete(id)}>
                Delete
              </Button>
            </Item>
          ))}
    </List>
  );
};
ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
