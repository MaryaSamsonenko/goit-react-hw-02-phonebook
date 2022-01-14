import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Form, Label, Input, ButtonSubmit } from "./ContactForm.styled";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid(4) });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name </Label>
        <div>
          {" "}
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <Label htmlFor="number">Number </Label>
        <div>
          <Input
            type="tel"
            name="number"
            placeholder="Enter tel"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}
