import styled from 'styled-components';
import ImageBackground from '../../assets/background-tela-login.jpg';

export const Container = styled.div`
  background-image: url(${ImageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
