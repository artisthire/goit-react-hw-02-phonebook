import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputWrapper, Label, Input } from './Filter.styled';

function Filter({ filterValue, onFilterChange }) {
  const inputId = nanoid();

  return (
    <InputWrapper>
      <Label htmlFor={inputId}>Find contact by name</Label>
      <Input
        id={inputId}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </InputWrapper>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
