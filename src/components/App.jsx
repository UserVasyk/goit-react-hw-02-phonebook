import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
import { Title, Box, TitleContacts } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = this.state.contacts.find(contact => contact.name === name);
    if (isExist !== undefined) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { getVisibleContacts, changeFilter, addContact, deleteContact } =
      this;
    const { filter } = this.state;
    return (
      <Box>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter changeFilter={changeFilter} filter={filter} />
        <ContactList
          deleteContact={deleteContact}
          contacts={getVisibleContacts()}
        />
      </Box>
    );
  }
}
