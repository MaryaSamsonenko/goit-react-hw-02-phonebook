export const ContactList = ({ contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(({ id, name, number }) => (
        <li key={id} name={name}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};
