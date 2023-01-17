import { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldInput, FormBox, ButtonSubmit, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  renderContact = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const massiveNames = this.props.checkingName();
    if (massiveNames.includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }
    this.setState({
      name: '',
      number: '',
    });

    this.props.onSubmit({ name, number });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  render() {
    const { renderContact, handleChange } = this;
    const { name, number } = this.state;
    return (
      <FormBox onSubmit={renderContact}>
        <Label>
          Name
          <FieldInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <FieldInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormBox>
    );
  }
}
ContactForm.propTypes = {
  checkingName: PropTypes.func.isRequired,
};
