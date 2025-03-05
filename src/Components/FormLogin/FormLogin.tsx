import React, { useState } from 'react';
import { Button, Input, FormWrapper, Container } from './FormLogin.styles';
import MariflixIcon from '../../assets/mariflix.png';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <img src={MariflixIcon} />
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
      </FormWrapper>
    </Container>
  );
};

export default FormLogin;
