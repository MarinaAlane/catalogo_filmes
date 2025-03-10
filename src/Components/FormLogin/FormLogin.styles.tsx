import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.text`
  background-color: transparent;
  color: black;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: #FF503B;
  background-color: transparent;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 5px;
`;

export const Button = styled.button`
  background-color: #FF8C42;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: rgb(109, 51, 15);
  }
`;

export const Title = styled.div`
  font-size: 25px;
  background-color: transparent;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  outline: none;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #C4D1EB;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 0px #E2E2E2;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.form`
  background: #E2E2E2;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
`;

export const WrapperRegister = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px;
  background-color: transparent;
  color: black;
`;
