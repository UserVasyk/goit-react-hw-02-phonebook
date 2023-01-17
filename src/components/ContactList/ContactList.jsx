import { Component } from 'react';
import { ListItem, List } from './ContactList.styled';
export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <button onClick={() => deleteContact(id)} type="button">
              DELETE
            </button>
          </ListItem>
        ))}
      </List>
    );
  }
}
