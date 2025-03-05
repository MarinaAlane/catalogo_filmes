import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }
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

export const FormWrapper = styled.div`
  padding: 30px 20px;
	box-shadow: 3px 3px 2px 0px #E2E2E2;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;