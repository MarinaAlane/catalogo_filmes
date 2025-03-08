import { ImageStyled, Container, Title, TitleContainer, ImageContainer } from './Header.styles';
import menu from '../../assets/menu-principal.png';

const Header = () => {
    const userData = JSON.parse(localStorage.getItem("userData") || '{}');
    console.log(userData)

  return(
    <Container>
      <ImageContainer>
        <ImageStyled src={menu} alt="Logo" />
      </ImageContainer>
      <TitleContainer>
        <Title>Movie App</Title>
        Olá, ${userData?.name}
      </TitleContainer>
    </Container>
  )
};

export default Header;
