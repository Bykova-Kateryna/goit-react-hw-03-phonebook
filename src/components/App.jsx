import { GlobalStyle } from './GlobalStyle';
import  {PhoneBoockContainer}  from './Phonebook/Phonebook.styled';
import  PhoneBookSection  from './Phonebook/Phonebook'



export const App = () => {
  return (
    <PhoneBoockContainer>
    <GlobalStyle />
    <PhoneBookSection />
  </PhoneBoockContainer>
  );
};
