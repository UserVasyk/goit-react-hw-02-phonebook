import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
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
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
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
  checkingName = () => {
    return this.state.contacts.map(({ name }) => name.toLowerCase());
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const {
      getVisibleContacts,
      changeFilter,
      addContact,
      checkingName,
      deleteContact,
    } = this;
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm checkingName={checkingName} onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} filter={filter} />
        <ContactList
          deleteContact={deleteContact}
          contacts={getVisibleContacts()}
        />
      </div>
    );
  }
}
