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
          <strong>TÍTULO DO PLANO:</strong>
          <Input type="text" name="title" />
          <Wrapper>
            <div>
              <strong>DURAÇÃO (em meses):</strong>
              <Input type="text" name="duration" />
            </div>
            <div>
              <strong>PREÇO MENSAL:</strong>
              <Input type="text" name="price" />
            </div>
            <div>
              <strong>PREÇO TOTAL:</strong>
              <Input type="text" name="price" formNoValidate disabled />
            </div>
          </Wrapper>
        </Form>
      </FormContainer>
    </Container>
  );
}
