import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #c14646;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  padding: 30px 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
`

export { StyledLink, Header, Nav };
