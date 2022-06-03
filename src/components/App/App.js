import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

const INITIAL_CONTACTS = [
  { id: nanoid(), name: 'Rosie Simpson', number: '645-17-79' },
  { id: nanoid(), name: 'Hermione Cline', number: '443-39-19' },
  { id: nanoid(), name: 'Eden Clemets', number: '555-13-11' },
];

class App extends Component {
  state = {
    contacts: [...INITIAL_CONTACTS],
  };

  handleContactAdd = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Wrapper>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onContactAdd={this.handleContactAdd} />

          <h2>Contacts</h2>
          <ContactList contacts={contacts} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;

/*
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
*/
