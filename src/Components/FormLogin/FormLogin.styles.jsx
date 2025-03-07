import styled from 'styled-components';

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
    background-color:rgb(109, 51, 15);
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
  background: #E2E2E2;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;


  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: black
`;

export const WrapperRegister =  styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px;

  link {
    color: #FF8C42;
    font-weight: 600;
    margin-left: 10px;
    cursor: pointer;
  }
`