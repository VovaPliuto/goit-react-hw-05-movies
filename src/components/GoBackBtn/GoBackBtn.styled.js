import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 5px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`