import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ImageStyled, Container, Title, ImageContainer, MenuContainer, UserData, LoginButton } from './Header.styles';
import menu from '../../assets/menu-principal.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData") || '{}');
  console.log(userData);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Container>
      <ImageContainer>
        <ImageStyled src={menu} alt="Logo" onClick={handleMenuClick} />
      </ImageContainer>
      <Title>Movie App</Title>
      {userData?.name ? (
        <UserData>Olá, {userData.name}</UserData>
      ) : (
        <LoginButton onClick={() => (navigateToLogin())}>Login</LoginButton>
      )}
      {menuOpen && (
        <MenuContainer>
          <p>Menu 1</p>
          <p>Menu 2</p>
          <p>Menu 3</p>
        </MenuContainer>
      )}
    </Container>
  );
};

export default Header;