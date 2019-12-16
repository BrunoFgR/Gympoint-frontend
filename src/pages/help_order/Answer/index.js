import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { MdClose } from 'react-icons/md';

import { Container, ContainerAnswer } from './styles';

export default function Answer({ answer, closeAnswer }) {
  function handleCloseAnswer() {
    closeAnswer(false);
  }

  return (
    <Container disabled={answer}>
      <ContainerAnswer>
        <div>
          <strong>PERGUNTA DO ALUNO:</strong>
          <button type="button" onClick={() => handleCloseAnswer()}>
            <MdClose size={40} color="#ee4d64" />
          </button>
        </div>
        <span>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </span>
        <strong>SUA RESPOSTA:</strong>
        <Input multiline name="answer" />
        <button type="submit">Responder aluno</button>
      </ContainerAnswer>
    </Container>
  );
}

Answer.propTypes = {
  answer: PropTypes.bool,
  closeAnswer: PropTypes.func.isRequired,
};

Answer.defaultProps = {
  answer: false,
};
