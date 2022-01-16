import PropTypes from "prop-types";

import { Item, Description, Button } from "./ContactsItem.styled";

export const ContactItem = ({ onDelete, contact: { id, name, number } }) => {
  return (
    <Item>
      <Description>{name}:</Description> <Description>{number}</Description>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};
ContactItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
