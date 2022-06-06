import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';

function ContactList({ contacts, onContactRemove }) {
  return (
    contacts.length > 0 && (
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ContactListItem
              name={name}
              number={number}
              onContactRemove={onContactRemove(id)}
            />
          </Item>
        ))}
      </List>
    )
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

export default ContactList;
