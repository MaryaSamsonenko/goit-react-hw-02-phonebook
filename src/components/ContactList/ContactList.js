import { Button, List, Item, Description } from "./ContactList.styled";

export const ContactList = ({ contacts, filter }) => {
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
              <Button type="button">Delete</Button>
            </Item>
          ))}
    </List>
  );
};
