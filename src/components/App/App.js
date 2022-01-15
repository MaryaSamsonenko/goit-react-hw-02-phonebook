import React, { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onSubmit = (newContact) => {
    this.setState((prevState) => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };
  onSearch = (filter) => {
    this.setState((prevState) => {
      return { ...prevState, filter: filter };
    });
  };

  onDelete = (id) => {
    const contactsFilter = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState((prevState) => {
      return { ...prevState, contacts: [...contactsFilter] };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter onChange={this.onSearch} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.onDelete}
        />
      </Container>
    );
  }
}

export default App;
