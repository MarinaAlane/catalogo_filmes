import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormWrapper, Container, WrapperRegister, StyledLink } from './FormLogin.styles';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") as string) : null;

    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      navigate("/");
    } else {
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="maria@email.com"
          />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="*******"
          />
        <Button>Login</Button>
        <WrapperRegister>
          Não tem cadastro ?
          <StyledLink to="/cadastro">Cadastre-se</StyledLink>
        </WrapperRegister>
      </FormWrapper>
    </Container>
  );
};

export default FormLogin;
