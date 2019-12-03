import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gympoint" />

      <Form>
        <strong>SEU E-MAIL:</strong>
        <Input name="email" type="email" placeholder="Digite o seu e-mail" />

        <strong>SUA SENHA:</strong>
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha secreta"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
