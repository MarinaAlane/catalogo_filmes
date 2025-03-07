import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, FormWrapper, Container, WrapperRegister } from './FormLogin.styles';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
          <Link to="/cadastro">Cadastre-se</Link>
        </WrapperRegister>
      </FormWrapper>
    </Container>
  );
};

export default FormLogin;
