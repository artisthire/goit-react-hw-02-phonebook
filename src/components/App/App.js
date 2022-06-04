import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const INITIAL_CONTACTS = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...INITIAL_CONTACTS],
    filter: '',
  };

  handleContactAdd = ({ name, number }) => {
    const isNameInContact = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isNameInContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        filter: '',
      }));
    }
  };

  handleContactRemove = removeContactId => {
    return () => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== removeContactId
        ),
        filter: '',
      }));
    };
  };

  handleFiterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();

    return (
      <Wrapper>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onContactAdd={this.handleContactAdd} />

          <h2>Contacts</h2>
          <Filter
            filterValue={filter}
            onFilterChange={this.handleFiterChange}
          />
          <ContactList
            contacts={visibleContacts}
            onContactRemove={this.handleContactRemove}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
