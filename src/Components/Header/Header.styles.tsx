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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: white; 
  padding: 10px;
  border: 1px solid #ccc;
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
