import styled from "styled-components";

export const Modal = styled.div`
  background-color: #69626D;
  width: 30%;
  height: 50%;
  padding: 30px;
  color: white;
  z-index: 2;
  font-size: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconStyled = styled.img`
  height: 100px;
  width: 100px;
  padding: 20px;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: black;
  position: relative;
`;
