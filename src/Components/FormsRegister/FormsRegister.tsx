import React, { useState } from 'react';
import { Button, Input, FormWrapper, Container, Text, Title, StyledLink } from '../FormLogin/FormLogin.styles';
import { IconStyled, Modal } from './FormRegister.styles';
import okItem from '../../assets/ok-item.png';

const FormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    console.log('handleSubmit foi chamado!'); 
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', name);

      
    localStorage.setItem('userData', JSON.stringify({
      email: email,
      password: password,
      name: name,
    }));

    setOpenModal(true);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
            <Title>
              Cadastre-se
            </Title>
            <Text>
              Preencha os campos abaixo para criar sua conta
            </Text>
          <StyledLink to="/login">Já tem cadastro ?</StyledLink>
        <Input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Maria da Silva"
          />
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
        <Button type="submit">Salvar</Button>
      </FormWrapper>
    {openModal &&
      <Modal>
        <IconStyled src={okItem} alt="ok" />
        Cadastro feito com sucesso!
        <StyledLink to="/login"> Faça o login </StyledLink>
       </Modal> }
    </Container>
  );
};

export default FormRegister;
