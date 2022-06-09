import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, LabelName, Input } from './Filter.styled';

function Filter({ filterValue, onFilterChange }) {
  const inputId = nanoid();

  return (
    <Label>
      <LabelName htmlFor={inputId}>Find contact by name</LabelName>
      <Input
        id={inputId}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
