import React from 'react';
import  PhoneBookForm  from '../ContactForm/ContactForm';
import  {Filter}  from '../Filter/Filter';
import  {ContactList}  from '../ContactList/ContactList';

class PhoneBookSection extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    const infoInLocalStorage = JSON.parse(localStorage.getItem('contacts'))
    if(infoInLocalStorage){
      this.setState({contacts: infoInLocalStorage})
    }
  }

  componentDidUpdate(prevProps, prevState){
if(this.state.contacts !== prevState.contacts){
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  }

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleFindNumber() {
    if (!this.state.filter) {
      return this.state.contacts;
    }

    const normalizedNameFilter = this.state.filter.toLocaleLowerCase();
    const filteredName = this.state.contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const filterResult = normalizedName.includes(normalizedNameFilter);
      return filterResult;
    });
    return filteredName;
  }

  handleSubmitForm = data => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  removeNumber = id => {
    this.setState(prevState => {
      const newNumberArr = prevState.contacts.filter(item => item.id !== id);

      return {
        contacts: newNumberArr,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <PhoneBookForm
          submitData={this.handleSubmitForm}
          dataArr={this.state.contacts}
        />
        <div>
          <h2>Contacts</h2>
          <Filter search={this.state.filter} changeValue={this.handleChange} />
          <ContactList
            array={this.handleFindNumber()}
            deleteNumber={this.removeNumber}
          />
        </div>
      </>
    );
  }
}

export default PhoneBookSection;