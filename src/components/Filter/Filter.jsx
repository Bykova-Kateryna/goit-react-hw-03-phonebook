import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FilterSection,
  FilterSectionLabel,
  FilterSectionInput,
} from './Filter.styled';

const contactFindId = nanoid();

export const Filter = ({ search, changeValue }) => {
  return (
    <FilterSection>
      <FilterSectionLabel htmlFor={contactFindId}>
        Find contacts by name
      </FilterSectionLabel>
      <FilterSectionInput
        type="text"
        name="filter"
        id={contactFindId}
        value={search}
        onChange={changeValue}
      />
    </FilterSection>
  );
};

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};