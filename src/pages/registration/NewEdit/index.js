import React from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import { Container, Info, Controller, FormContainer, Wrapper } from './styles';

export default function New() {
  return (
    <Container>
      <Info>
        <h1>Cadastro de Matrícula</h1>
        <Controller>
          <button
            type="button"
            onClick={() => history.push('/registrations/dashboard')}
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
          <strong>ALUNO:</strong>
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome do estudante"
          />
          <Wrapper>
            <div>
              <strong>PLANO:</strong>
              <Input type="text" name="plan_id" placeholder="Plano" />
            </div>
            <div>
              <strong>INÍCIO:</strong>
              <Input
                type="date"
                name="date_start"
                placeholder="Data de inicio"
              />
            </div>
            <div>
              <strong>TÉRMINO:</strong>
              <Input type="date" name="height" formNoValidate disabled />
            </div>
            <div>
              <strong>VALOR A PAGAR:</strong>
              <Input type="text" name="price" formNoValidate disabled />
            </div>
          </Wrapper>
        </Form>
      </FormContainer>
    </Container>
  );
}
