import styled from 'styled-components';

export const FilterSection = styled.div`
background-color: #fff;
padding: 15px;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
margin-top: 15px;
margin-bottom: 15px;
max-width: 350px;
`;

export const FilterSectionLabel = styled.label`
display: flex;
`;

export const FilterSectionInput = styled.input`
width: 100%;
&:hover,
&:focus {
  border: 2px solid #1d88c5;
}
`;