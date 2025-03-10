import styled from 'styled-components';
import ImageBackground from '../../assets/background-tela-login.jpg';

export const Container = styled.div`
  background-image: url(${ImageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
