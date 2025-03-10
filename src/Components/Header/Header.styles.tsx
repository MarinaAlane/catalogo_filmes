import styled from "styled-components";

export const ImageStyled = styled.img`
  max-height: 30px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const ImageContainer = styled.div`
  margin-right: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 10%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #444146;
  border-radius: 8px;
  padding: 10px;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-100%)')};
  

  p {
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    padding: 15px 0;
    cursor: pointer;

    &:hover {
      color:rgb(169, 169, 169);
    }
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 30vh;
    top: 40px;
    left: 10%;
  }
`;

export const UserData = styled.div`
  background-color: #FF503B;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 3px 5px;
    font-size: 14px;
    width: 30%;
  }
`;

export const LoginButton = styled.button`
  background-color: #FF503B;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: #FF3633;
  }
`;
