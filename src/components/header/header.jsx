import { HeaderStyled, NavStyled, LinkStyled } from './header.styled';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <LinkStyled to={'/'}>Home</LinkStyled>
          <LinkStyled to={'/movies'}>Movies</LinkStyled>
        </NavStyled>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
