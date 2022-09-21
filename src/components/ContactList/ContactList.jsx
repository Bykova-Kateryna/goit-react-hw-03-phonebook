import PropTypes from 'prop-types';

import {
  ContactListSection,
  ContactListItem,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({ array, deleteNumber }) => {
  return (
    <ContactListSection>
      {array.map(item => (
        <ContactListItem key={item.id}>
          {item.name}: {item.number}
          <DeleteBtn type="button" onClick={() => deleteNumber(item.id)}>
            Delete
          </DeleteBtn>
        </ContactListItem>
      ))}
    </ContactListSection>
  );
};

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  deleteNumber: PropTypes.func,
};