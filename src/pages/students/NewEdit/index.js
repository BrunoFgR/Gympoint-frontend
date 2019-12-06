import React from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import history from '~/services/history';

import { Container, Info, Controller, FormContainer, Wrapper } from './styles';

export default function New() {
  return (
    <Container>
      <Info>
        <h1>Cadastro de Alunos</h1>
        <Controller>
          <button
            type="button"
            onClick={() => history.push('/students/dashboard')}
          >
            <MdKeyboardArrowLeft color="#fff" size={20} />
            Voltar
          </button>
          <button type="submit" form="data">
            <MdCheck color="#fff" size={20} />
            Salvar
          </button>
        </Controller>
      </Info>
      <FormContainer>
        <Form id="data">
          <strong>NOME COMPLETO:</strong>
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome do estudante"
          />
          <strong>ENDEREÇO DE E-MAIL:</strong>
          <Input
            type="email"
            name="email"
            placeholder="Digite o email do estudante"
          />
          <Wrapper>
            <div>
              <strong>IDADE:</strong>
              <Input type="text" name="age" placeholder="Idade" />
            </div>
            <div>
              <strong>PESO(em kg):</strong>
              <Input type="text" name="weight" placeholder="Peso" />
            </div>
            <div>
              <strong>ALTURA:</strong>
              <Input type="text" name="height" placeholder="Altura" />
            </div>
          </Wrapper>
        </Form>
      </FormContainer>
    </Container>
  );
}
