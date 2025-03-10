import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import menu from '../../assets/menu-principal.png';
import { Container, ImageContainer, ImageStyled, LoginButton, MenuContainer, Title, UserData } from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setMenuOpen(false);
  };

  const navigateToFavorites = () => {
    navigate('/favoritos');
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
        <LoginButton onClick={navigateToLogin}>Login</LoginButton>
      )}
      {menuOpen && (
        <MenuContainer menuOpen={menuOpen}>
          <p onClick={navigateToFavorites}>Filmes favoritos</p>
          {userData?.name ?
            <p onClick={handleLogout}>Sair</p> : <p onClick={navigateToLogin}>Login</p>}
        </MenuContainer>
      )}
    </Container>
  );
};

export default Header;
