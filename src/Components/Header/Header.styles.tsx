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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #444146;
  height: 100%;

  p {
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;

    &:hover {
      color:rgb(167, 167, 167);
      cursor: pointer;
    }
  }


`;

export const UserData = styled.div`
  background-color: #FF503B;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
  font-weight: bold;
`;

export const LoginButton = styled.button`
  background-color: #FF503B
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
