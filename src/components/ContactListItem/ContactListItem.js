import PropTypes from 'prop-types';
import { Number, Button } from './ContactListItem.styled';

function ContactListItem({ name, number, onContactRemove }) {
  return (
    <>
      {name}: <Number>{number}</Number>{' '}
      <Button onClick={onContactRemove}>Delete</Button>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
