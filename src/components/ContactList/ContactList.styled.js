
import styled from 'styled-components';

export const ContactListSection = styled.ol`
  background-color: #fff;
  padding-rigth: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  max-width: 350px;
`;

export const ContactListItem = styled.li`
  margin-top: 15px;
`;

export const DeleteBtn = styled.button`
  margin-left: 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #1d88c5;
  }
`;