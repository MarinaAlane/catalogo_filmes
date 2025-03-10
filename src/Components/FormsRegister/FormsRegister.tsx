import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, FormWrapper, Container } from '../FormLogin/FormLogin.styles';
import { Modal } from './FormRegister.styles';

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
          <h1>Cadastro</h1>
          <p>Preencha os campos abaixo para criar sua conta</p>
          <Link to="/login">Já tem cadastro ?</Link>
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
    {openModal && <Modal> Cadastro feito com sucesso!
      <p> Clique aqui e faça o login </p>
       </Modal> }
    {/* Mandar para login */}
    </Container>
  );
};

export default FormRegister;
