import PropTypes from 'prop-types';
import { Item, Number, Button } from './ContactListItem.styled';

function ContactListItem({ id, name, number, onContactRemove }) {
  return (
    <Item>
      {name}: <Number>{number}</Number>{' '}
      <Button onClick={onContactRemove(id)}>Delete</Button>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
