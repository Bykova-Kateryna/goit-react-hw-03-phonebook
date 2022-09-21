import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  ContactFofmSection,
  Fofm,
  FormLabel,
  FormInput,
  FormBtn,
} from './ContactForm.stysed';

class PhoneBookForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = nanoid();
  contactTellId = nanoid();

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  findName = name => {
    return this.props.dataArr.find(arr => {
      const nameInArr = arr.name.toLocaleLowerCase();
      const newName = name.toLocaleLowerCase();
      return nameInArr === newName;
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const addName = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    if (this.findName(this.state.name)) {
      return Report.failure(
        'Something went wrong',
        'This name is already in the contact list!',
        'Okay'
      );
    } else {
      this.props.submitData(addName);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <ContactFofmSection>
        <Fofm onSubmit={this.handleSubmit}>
          <div>
            <FormLabel htmlFor={this.contactNameId}>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.contactNameId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <FormLabel htmlFor={this.contactTellId}>Number</FormLabel>
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.contactTellId}
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
          <FormBtn type="submit">Add contact</FormBtn>
        </Fofm>
      </ContactFofmSection>
    );
  }
}

export default PhoneBookForm;

PhoneBookForm.propTypes = {
  submitData: PropTypes.func.isRequired,
  dataArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};