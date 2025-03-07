import { ImageStyled, Container, Title, TitleContainer, ImageContainer } from './Header.styles';
import menu from '../../assets/menu-principal.png';

const Header = () => {
  return(
    <Container>
      <ImageContainer>
        <ImageStyled src={menu} alt="Logo" />
      </ImageContainer>
      <TitleContainer>
        <Title>Movie App</Title>
      </TitleContainer>
    </Container>
  )
};

export default Header;
