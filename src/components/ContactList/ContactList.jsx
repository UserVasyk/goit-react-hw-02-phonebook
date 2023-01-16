import { Component } from 'react';
export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => deleteContact(id)} type="button">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
