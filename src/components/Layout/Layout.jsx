import React from 'react'
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Nav } from './Layout.styled';


const Layout = () => {
  return (
    <>
    <Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </Header>
    <main>
        <Outlet />
    </main>
    </>
  );
}

export default Layout
