import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Info, Controller } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Info>
        <h1>Gerenciando alunos</h1>
        <Controller>
          <button type="button">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
        </Controller>
      </Info>
    </Container>
  );
}
